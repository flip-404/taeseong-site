---
title: 'Docker 시작하기'
description: '도커(Docker) 튜토리얼'
tags: ['Docker']
date: '2024-05-18'
---

## 도커(Docker)의 등장

도커는 **컨테이너 기반**의 오픈소스 **가상화 플랫폼**이다.

말을 하나씩 뜯어보자.

`가상화`

가상화란 물리적 자원인 하드웨어를 효율적으로 활용하기 위해 하드웨어 공간 위에 가상의 머신을 만드는 기술이다.

`컨테이너`

프로세스를 격리해 독립된 환경을 만드는 기술

다시 말해 도커는 독립된 환경을 만들어 하드웨어를 효율적으로 관리하는 기술이다!

그런데, 우리는 도커가 존재하기 전에 이미 가상화 솔루션인 VM이라는 기술을 갖고 있었다. VM이 존재하는데 왜 도커가 등장했을까?

![버츄얼 머신 이미지.png](https://velog.velcdn.com/images/flip_404/post/fd8685cf-2d3e-4161-a145-556d2c40b186/image.png)

**VM(Virtual Machine)**

VM은 실재하는 컴퓨터 상에 논리적으로 만들어낸 컴퓨터를 말한다.

실제로 나도 윈도우 컴퓨터에서 hyper-V를 이용해 여러 서버를 구성한 적이 있다.

그 때의 경험을 되짚어 보면, 호스트 컴퓨터는 Window, 게스트 컴퓨터1은 Rocky linux, 게스트 컴퓨터2는 window로 구성했다. 각각의 컴퓨터가 호스트 OS 종속 없이 완전히 분리된 환경에서 구동시킬 수 있었다는 뜻이다.

하지만 가상 머신으로 무언가를 하려면 하이퍼바이저를 거쳐야하기 때문에 속도 저하가 필연적이라는 단점이 있다. 또한, 가상머신은 해당 환경을 구동하기 위한 파일을 모두 포함하고 있기 때문에 배포할 때 만들어지는 이미지의 크기가 매우 크다는 한계가 있다.

- 컴퓨터 한 대에서 여러 OS를 사용 가능
- 게스트OS는 다른 게스트OS와 완전히 분리된 환경에서 구동
- 하이퍼바이저를 거치며 속도 저하
- 환경 구성을 위한 모든 파일을 포함하므로 용량이 매우 크게 필요

**도커(Docker)**

도커가 VM과 다른 점은 컨테이너가 가상의 OS를 만드는 것이 아니라는 것이다. 컨테이너는 베이스 환경의 OS는 그대로 이용하되 **필요한 프로세스만 격리**한다. 커널을 공유하기 때문에 호스트 OS의 기능을 그대로 사용할 수 있다.

또다른 운영체제가 아닌 프로세스를 구동한다고 보면 된다. 다른 운영체제를 구동할 수는 없지만 대신 필요한 파일이나 종속 항목들만 포함시키면 되기 때문에 이미지의 용량을 작게 유지할 수 있다.

- 컴퓨터 한 대에서 여러 OS 사용 불가
- 호스트와 게스트 컴퓨터는 커널을 공유
- 커널을 통해 직접 접근하므로 속도 저하 x
- 필요한 종속성만 가져가므로 용량이 상대적으로 작음

> 커널: OS의 핵심 부분으로, 하드웨어와 소프트웨어를 연결해 주는 역할

## 도커와 도커에 이용되는 개념들

**도커(도커 엔진)**

도커라는 이름은 부두에서 컨테이너를 옮기고 관리하는 직업인 `docker` 에서 따왔다. 이름에 걸맞게 컨테이너를 쉽게 관리할 수 있도록 돕는 도구가 도커다.

도커 엔진은 도커 소프트웨어의 본체이자 컨테이너를 생성하고 관리하는 주체

도커 엔진을 사용해 컨테이너를 생성하고 구동할 수 있다.

**컨테이너(Docker Container)**

프로세스 단위의 격리 환경이다.

어플리케이션을 구동하는 데 필요한 라이브러리 및 실행 파일만이 존재한다.

**이미지(Docker Image)**

컨테이너를 생성하기 위한 요소다.

컨테이너와 1:N관계에 있는 존재로 컨테이너 실행에 필요한 파일, 설정값을 모두 포함한다.

비슷한 개념으로 객체지향 프로그래밍에서의 클래스(이미지), 인스턴스(컨테이너)가 있다.

**도커 파일(Dockerfile)**

도커 이미지를 생성하기 위한 지시사항들을 포함하는 텍스트 파일이다.

도커 이미지를 구성하고 이미지를 빌드하는 과정을 정의할 수 있다.

![DockerFile.png](https://velog.velcdn.com/images/flip_404/post/18559a29-9132-4b46-bcbf-4cd47640dd0c/image.png)

**예시**

웹 서버 환경을 담은 도커 이미지(1)로부터 여러 개의 도커 컨테이너(N)를 생성하면 컨테이너 개수만큼 웹 서버가 생성된다. 컨테이너는 이미지를 읽기 전용으로 사용하기 때문에 웹 서버를 띄운 후 컨테이너에서 무엇을 하든 이미지는 영향 받지 않는다. 생성된 각 컨테이너는 각기 독립된 파일 시스템을 제공받기 때문에 어떤 어플리케이션을 설치하거나 삭제해도 다른 컨테이너나 호스트에 영향을 주지 않는다.

## 도커 설치 및 실행

### **1. 도커 설치**

맥북용 도커 설치 주소에서 설치 프로그램을 다운받는다.

https://docs.docker.com/desktop/setup/install/mac-install/

### 2. 도커 파일 작성

<img src="https://velog.velcdn.com/images/flip_404/post/42fcc810-bb17-48e8-aead-53db1512b225/image.png" alt="디렉토리 구조.png" style="height: 300px;">

웹서버에서 프로젝트를 제공하는 컨테이너를 띄우기 위해서는 컨테이너 실행에 필요한 도커 이미지가 필요하다.

도커 이미지를 생성하기 위한 도커 파일을 작성해보자.

**도커 파일 작성 순서**

1. nginx 설치
2. 프로젝트의 build 파일 복사
3. nginx가 build 파일을 serving 할 수 있도록 설정
4. nginx 실행

```docker
# 1️⃣ 빌드 전용 환경
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build  # 👉 dist 폴더 생성(프로젝트 빌드)

# 2️⃣ 실행 환경 (NGINX)
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html # builder 단계에서 만들어진 /app/dist 폴더를 /usr/share/nginx/html로 복사
EXPOSE 80 # 컨테이너 80번 포트 열기
CMD ["nginx", "-g", "daemon off;"]
```

### 3. nginx 설정하기

1. nginx 디렉토리 설정
   \*\*\*\*배포할 프로젝트 내부에 nginx 폴더를 생성한 후 nginx.conf 파일을 추가한다.
2. nginx.conf 작성

```python
http {
    include       mime.types;
    default_type  application/octet-stream;

    access_log  /var/log/nginx/access.log;  # 접근 로그
    error_log   /var/log/nginx/error.log;   # 에러 로그

    server {
        listen 80;  # HTTP 80번 포트에서 요청을 받음
        server_name my-website.com;  # 도메인 이름 (사이트 이름)

        root /usr/share/nginx/html;  # 정적 파일이 저장된 디렉토리
        index index.html index.htm;  # 기본 페이지 설정

        location / {
            try_files $uri $uri/ =404;  # 요청된 파일이 없으면 404 페이지 반환
        }

        error_page 404 /404.html;  # 404 에러 발생 시 보여줄 페이지
        location = /404.html {
            internal;  # 외부에서 접근할 수 없도록 설정
        }
    }
}

```

### 3. 도커 이미지 빌드 및 실행

```bash
docker build -t [image 이름] [디렉토리]
```
