---
title: "권한 기반 접근 제어(RBAC)로 Next.js 백오피스 구축하기"
description: "Next.js에서 권한 기반 접근 제어(RBAC)를 구현하는 방법에 대해 간단히 정리해보았습니다."
tags: ["Next.js", "RBAC"]
date: "2025-04-09"
---

회사에서 새로운 백오피스 프로젝트를 시작하게 되었습니다. 이번 백오피스는 체카 운영팀뿐만 아니라, 현장 작업자, 협력사, 딜러사 등 다양한 이해관계자들이 모두 사용할 수 있는 통합 플랫폼을 만드는 것을 목표로 했습니다. 더불어, 각 소속별로 직급이 세분화되어 있기 때문에, 소속과 직급에 따라 접근 가능한 기능을 유연하게 제어할 수 있는 구조가 필요했습니다.

이러한 요구사항을 바탕으로 프로젝트의 전반적인 설계를 담당하게 되었고, 그 과정에서 고민한 시스템 설계 내용을 정리해 보았습니다.

접근 제어 방식으로는 **권한(Role) 기반 접근 제어(RBAC: Role-Based Access Control)** 방식을 도입하는 것이 가장 깔끔하고 확장성 있는 방법이라고 판단했습니다. Next.js의 서버 컴포넌트와 middleware 기능을 활용하면, 역할에 따른 기능 제어를 더욱 우아하고 효율적으로 구현할 수 있을 것이라 생각했습니다.

## 유저 권한에 따른 기능 제어

아래(예시 사진)과 같이 사이드바에 각 기능에 대한 navigation(라우트)가 있다고 가정하고, 유저의 권한에 따라 보여지는 (접근할 수 있는) 기능이 다르다고 가정해보겠습니다.

![](https://velog.velcdn.com/images/flip_404/post/c9e76439-c6b6-4e6b-bb5f-0b63cc00f16e/image.png)


아래부터 관련한 예시 코드와 함께 권한(Role) 기반 접근 제어 방식에 대해 정리해보겠습니다.

---

### 권한(Role) 정의

우선 시스템에서 사용할 **역할(role)** 과 **권한(permission)** 을 정의합니다.

```tsx
// types/role.ts
export type Role = 'admin' | 'manager' | 'editor' | 'viewer';

export interface Permission {
  accessDashboard: boolean;
  manageUsers: boolean;
  editContent: boolean;
  viewReports: boolean;
}

```

### 권한 매핑

각 Role이 각 기능에 대해 어떤 Permission을 가졌는지 매핑해줍니다.

```tsx
// constants/permissions.ts
import { Role, Permission } from '@/types/role';

export const rolePermissions: Record<Role, Permission> = {
  admin: {
    accessDashboard: true,
    manageUsers: true,
    editContent: true,
    viewReports: true,
  },
  manager: {
    accessDashboard: true,
    manageUsers: true,
    editContent: true,
    viewReports: true,
  },
  editor: {
    accessDashboard: true,
    manageUsers: false,
    editContent: true,
    viewReports: false,
  },
  viewer: {
    accessDashboard: true,
    manageUsers: false,
    editContent: false,
    viewReports: true,
  },
};
```

### **Sidebar 메뉴 설정**

각 메뉴 항목에 필요한 permission을 등록합니다.

```tsx
// constants/sidebarMenu.ts
export interface SidebarItem {
  label: string;
  href: string;
  requiredPermission: keyof Permission;
}

export const sidebarMenu: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard', requiredPermission: 'accessDashboard' },
  { label: 'User Management', href: '/users', requiredPermission: 'manageUsers' },
  { label: 'Content Edit', href: '/content', requiredPermission: 'editContent' },
  { label: 'Reports', href: '/reports', requiredPermission: 'viewReports' },
];
```

### **Sidebar 렌더링**

현재 로그인한 유저의 Role을 기반으로, 허용된 메뉴만 보여줍니다.

```tsx
// components/Sidebar.tsx
'use client';

import { sidebarMenu } from '@/constants/sidebarMenu';
import { rolePermissions } from '@/constants/permissions';
import { Role } from '@/types/role';

interface SidebarProps {
  role: Role;
}

export function Sidebar({ role }: SidebarProps) {
  const permissions = rolePermissions[role];

  return (
    <nav>
      <ul>
        {sidebarMenu.map((item) => {
          if (permissions[item.requiredPermission]) {
            return (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
}

```

## 서버 사이드 권한 제어하기

사이드바에서 메뉴 자체를 숨기는 것만으로는 완벽한 보안을 제공할 수 없습니다. 사용자가 URL을 직접 입력하여 접근할 수도 있기 때문입니다. 이를 방지하기 위해 서버 사이드에서 권한을 검증하는 방법을 알아보겠습니다.

### Route Guard

페이지 접근 자체도 막으려면, 서버 컴포넌트나 미들웨어에서도 권한 체크를 할 수 있습니다. 예를 들면 layout.tsx 안에서 현재 유저 role을 가져와서, 해당 role에 맞는 권한이 없으면 리다이렉트 시키는 방식으로 구현할 수 있습니다.

```tsx
// app/(dashboard)/users/page.tsx
import { getCurrentUserRole } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { rolePermissions } from '@/constants/permissions';

export default async function UsersPage() {
  const role = await getCurrentUserRole(); // 예: 쿠키나 세션에서 가져오기
  const permissions = rolePermissions[role];

  if (!permissions.manageUsers) {
    redirect('/not-authorized');
  }

  return (
    <div>
      <h1>User Management</h1>
      {/* 유저 관리 기능 */}
    </div>
  );
}

```

### Next.js Middleware를 활용한 권한 제어

Next.js에서는 Middleware를 사용하여 더 효율적으로 권한을 제어할 수 있습니다. Middleware는 사용자의 요청이 특정 페이지나 API에 도달하기 전에 실행되는 코드로, 요청과 응답 사이에서 중간 처리 역할을 합니다.

Middleware를 사용한 권한 보호 흐름은 다음과 같습니다

```tsx
[ 브라우저 요청 ]
        ↓
[ Middleware ]
    - role 조회
    - permission 체크
    - 권한 없으면 redirect
        ↓
[ 페이지 렌더링 ]

```

### `middleware.ts` 생성

Next.js 루트(`/`)에 `middleware.ts` 파일을 생성합니다

```tsx
tsx
복사편집
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { rolePermissions } from '@/constants/permissions';

const PROTECTED_ROUTES = [
  { path: '/users', requiredPermission: 'manageUsers' },
  { path: '/content', requiredPermission: 'editContent' },
  { path: '/reports', requiredPermission: 'viewReports' },
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 예시로 쿠키에서 role을 읽는다. (실제 앱에 맞게 수정)
  const role = request.cookies.get('role')?.value as keyof typeof rolePermissions | undefined;

  if (!role) {
    // 로그인 안 된 경우 로그인 페이지로 이동
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const permissions = rolePermissions[role];

  for (const route of PROTECTED_ROUTES) {
    if (pathname.startsWith(route.path)) {
      const hasPermission = permissions[route.requiredPermission as keyof typeof permissions];

      if (!hasPermission) {
        return NextResponse.redirect(new URL('/not-authorized', request.url));
      }
    }
  }

  return NextResponse.next();
}
```

위 코드를 보면 다음과 같은 흐름을 가지고 있습니다.

1. 로그인이 되지 않은 경우, 로그인 페이지로 이동합니다.
2. 사용자가 현재 접속하려는 경로에 접근 권한을 가지지 않은 경우 `/not-authorized` 페이지로 이동합니다.
3. 권한이 있는 경우에는 정상적으로 요청을 처리합니다.

`matcher`로 어떤 경로가 Middleware를 거칠지 설정할 수 있습니다.

`middleware.ts` 파일 아래에 다음과 같이 `matcher`를 설정하면, 해당 경로로 요청이 올 때만 Middleware가 발동됩니다.

```tsx

export const config = {
  matcher: ['/users/:path*', '/content/:path*', '/reports/:path*'],
};

```

**마무리하며**

이렇게 Next.js에서 권한 기반 접근 제어(RBAC)를 구현하는 방법에 대해 알아보았습니다. 클라이언트 측에서 사이드바 렌더링을 통한 UI 제어와 서버 측에서 라우트 가드 및 미들웨어를 활용한 접근 제어를 조합하면, 다양한 사용자 권한에 따라 효과적으로 기능을 제한할 수 있습니다.