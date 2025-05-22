---
title: "tanstack-query의 내부 동작 원리"
description: "tanstack-query의 내부 동작 원리에 대해 조금은 쉽게 정리해 보았습니다."
tags: ["tanstack-query", "react"]
date: "2025-04-22"
---


# TanStack Query의 내부 동작 원리

TanStack Query를 사용하다 보니, 문득 "이 라이브러리는 내부적으로 어떻게 작동할까?" 하는 궁금증이 생겼습니다.
그래서 내부 구현 방식과 메모리에서 데이터를 어떻게 적재하고 관리하는지를 살펴보게 되었습니다.

기능이 많은 만큼 코드의 양은 꽤 방대했지만, 막상 동작 원리를 들여다보니 생각보다는 단순한 구조였습니다.

이제 TanStack Query가 내부적으로 어떤 방식으로 작동하는지, 특히 메모리에서 데이터를 어떻게 다루는지 코드 레벨에서 함께 살펴보겠습니다.


## 1. TanStack Query를 제대로 이해해보자

TanStack Query는 기본적으로 세 가지 주요 개념으로 구성됩니다.

- **QueryClient**: 전체 쿼리를 총괄 관리하는 관리자
- **QueryCache**: 실제 데이터를 저장해두는 메모리 저장소
- **Query**: 특정 데이터를 가져오는 작업 단위 (예: 할 일 목록 요청)



먼저 가장 기본적인 초기화 코드를 살펴보겠습니다.

```javascript
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 데이터가 5분 동안은 신선하다고 간주
      cacheTime: 1000 * 60 * 30, // 30분간 메모리에 유지
    },
  },
})
```

## 2. QueryCache: 데이터 저장 창고

QueryCache는 여러 쿼리를 저장해두는 저장소입니다. 내부적으로는 자바스크립트의 Map을 써서 데이터를 관리합니다.


```javascript
class QueryCache {
  constructor() {
    this.queries = new Map()
  }

  add(query) {
    const hash = query.queryHash
    this.queries.set(hash, query)
    return query
  }

  find(input) {
    const { queryHash } = this.getQueryKeyHashPair(input)
    return this.queries.get(queryHash)
  }
}

```
<br/>

> 여기서 핵심은 모든 쿼리는 고유한 해시값으로 저장된다는 점이에요.


## 3. 쿼리 키와 해시란?
쿼리를 구분하려면 고유한 식별자가 필요하겠죠? 그게 <strong>쿼리 키(Query Key)</strong>이고, 이걸 문자열로 변환한 게 <strong>해시(Query Hash)</strong>예요.

```javascript
// 쿼리 키와 해시 생성 코드
function hashQueryKey(queryKey) {
  return JSON.stringify(queryKey, (_, val) =>
    isPlainObject(val)
      ? Object.keys(val).sort().reduce((res, key) => {
          res[key] = val[key]
          return res
        }, {})
      : val,
  )
}
```

이렇게 하면, [‘todos’]나 { userId: 1 }처럼 키 순서가 달라도 동일한 쿼리는 같은 해시를 갖게 돼요.

여기서 주목할 점
1. 쿼리 키는 배열이나 객체 형태로 제공됩니다.
2. `hashQueryKey` 함수는 쿼리 키를 안정적인 JSON 문자열로 변환합니다.
3. 객체의 경우 키를 정렬하여 키 순서가 다르더라도 동일한 해시가 생성되도록 합니다.

## 4. 데이터를 어떻게 가져오고 저장할까?

쿼리가 실행되면 데이터를 가져오고 캐시에 저장하는 과정은 다음과 같습니다:

```javascript
// Query 클래스의 핵심 부분 (간략화)
class Query {
  constructor(config) {
    this.queryKey = config.queryKey
    this.queryFn = config.queryFn
    this.state = {
      data: undefined,
      status: 'idle',
      isFetching: false,
    }
  }

  async fetch() {
    this.state.status = 'loading'
    this.state.isFetching = true

    try {
      const data = await this.queryFn()
      this.setData(data)
      return data
    } catch (err) {
      this.state.status = 'error'
      throw err
    } finally {
      this.state.isFetching = false
      this.notify()
    }
  }

  setData(data) {
    this.state.data = data
    this.state.status = 'success'
    this.state.dataUpdatedAt = Date.now()
  }
}
```

데이터 적재 과정을 요약하자면
1. queryFn()을 실행해 데이터를 가져옴
2. 가져온 데이터를 상태에 저장
3. 옵저버 패턴을 사용하여 이 쿼리를 사용하는 모든 컴포넌트에게 알립니다.




## 5. 오래된 데이터는 어떻게 처리할까? (가비지 컬렉션)

TanStack Query는 오래된 데이터를 자동으로 정리해주는 기능도 있어요.

```javascript
class QueryClient {
  initGarbageCollector() {
    this.gcInterval = setInterval(() => {
      this.garbageCollect()
    }, 5 * 60 * 1000) // 5분마다 실행
  }

  garbageCollect() {
    const now = Date.now()
    this.queryCache.queries.forEach(query => {
      if (query.observers.length === 0 && now - query.state.updatedAt > query.cacheTime) {
        this.queryCache.remove(query)
      }
    })
  }
}
```

즉, 사용 중이 아니고(옵저버가 없고), 정해진 시간이 지난 쿼리는 메모리에서 제거돼요.

핵심 가비지 컬렉션 로직
1. 주기적으로(기본 5분) `garbageCollect` 메서드가 실행됩니다.
2. 더 이상 관찰자(사용자)가 없고 마지막 업데이트 이후 `cacheTime`(기본 5분)이 지난 쿼리는 메모리에서 제거됩니다.

이외에 수동으로 캐시를 무효화하는 방법도 있습니다.

```javascript
invalidateQueries(filters) {
  const queries = this.queryCache.findAll(filters)
  return Promise.all(queries.map(query => query.fetch()))
}
```

## 6. 실제 사용 시나리오

실제 TanStack Query 사용 코드와 내부 동작을 연결해보겠습니다.

```javascript
const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 1000 * 60, // 1분
})
```

**내부 동작 과정**
1. `useQuery` 훅이 호출되면 쿼리 키 `['todos']`에 대한 해시가 생성됩니다.
2. `QueryCache`에서 해당 해시로 쿼리를 검색합니다.
3. 캐시에 존재하면:
   - 현재 시간 - `dataUpdatedAt` > `staleTime`인 경우에만 백그라운드에서 다시 가져옵니다.
   - 그렇지 않으면 캐시된 데이터를 바로 반환합니다.
4. 캐시에 없으면:
   - 새 `Query` 인스턴스를 생성합니다.
   - `fetchTodos` 함수를 실행하여 데이터를 가져옵니다.
   - 결과를 `QueryCache`에 저장합니다.
5. 컴포넌트는 해당 쿼리의 옵저버로 등록되어 데이터 변경 시 알림을 받습니다.

## 마무리하며

TanStack Query는 서버에서 가져온 데이터를 자동으로 저장하고, 필요할 때만 다시 요청하고, 오래된 건 알아서 정리해줍니다. 굳👍
