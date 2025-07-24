import { WorkExperience, PersonalProject, Activity, Education } from '../types';

export const PERSONAL_INFO = {
  name: '김태성',
  position: 'Frontend Developer',
  email: 'aka404365@gmail.com',
  github: 'https://github.com/flip-404',
  blog: 'https://taeseong-site.vercel.app/',
};

export const PHILOSOPHY_ITEMS = [
  {
    title: '옆자리 동료를 위해 일합니다',
    description:
      '코드의 가독성은 절대적인 것이 아니라고 생각합니다. 옆자리 동료가 편안하게 읽을 수 있는 코드를 작성하기 위해 공부하고, 의견을 나누며 개발하고 있습니다.',
    bgColor: 'bg-blue-50',
    hasTitle: true,
  },
  {
    description:
      '유지보수가 용이한 코드를 작성하는 것은 미래의 저를 위한 일이라고 생각합니다. 업보를 쌓지 않기 위해 다양한 지식을 학습하고, 적용합니다.',
    bgColor: 'bg-indigo-50',
    hasTitle: false,
  },
  {
    title: '제품에 무한한 애정을 쏟습니다',
    description:
      "제품은 팀이 낳은 자식이라고 생각합니다. '우리 이거 적용해 볼까요?', '이렇게 하면 유저 경험이 더 좋아지지 않을까요?' 와 같은 말을 나누며 제품을 성장시키는 것이 즐겁습니다.",
    bgColor: 'bg-green-50',
    hasTitle: true,
  },
  {
    description:
      "'상조님 덕에 편해졌어요' 라는 말을 듣는 것이 좋습니다. CI 구축, 빌드 시간 개선, 반복적인 작업의 자동화 등 팀의 생산성 향상을 위해 적극적으로 기여하고 있습니다.",
    bgColor: 'bg-purple-50',
    hasTitle: false,
  },
];

// 프로젝트의 레이아웃 구성 및 주요 페이지 개발 전반을 담당
// 사용자 인증 시스템과 라우팅 구조를 포함한 전반적인 프론트엔드 아키텍처를 설계[관련 포스트]
// RBAC(Role-Based Access Control) 방식으로 사용자 권한에 따라 페이지 접근 제어
// Next.js의 middleware를 활용한 쿠키 기반 인증으로 서버 사이드 검증 로직 구현

// 일단 .. 멘트 수정 및 추가?
// 디자인은 나중에

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'chexcar',
    companyName: '체카',
    position: 'Frontend Engineer',
    team: 'CHEXCAR LAB. Development Team',
    duration: '2025.01 - 재직중',
    logo: {
      text: '체카',
      bgColor: 'bg-blue-600',
    },
    projects: [
      {
        name: '차량 상품화 관리 플랫폼(B2B SaaS) 및 백오피스 개발',
        description:
          '기존 체카의 상품화 서비스를 기반으로, 새로운 B2B 비즈니스 모델에 맞춰 재구성한 SaaS(Software as a Service) 플랫폼입니다.',
        technologies: ['Next.js 14(app)', 'tailwind', 'TanStack Query', 'Zustand', 'recharts'],
        achievements: [
          {
            title: '팀이 효율적으로 일할 수 있는 환경을 구축했습니다',
            description: '',
            type: 'business',
            items: [
              '유사한 구조의 두 백오피스 프로젝트를 효율적으로 관리하기 위해 Monorepo 아키텍처를 설계하고 도입 (포스트)',
              'commitlint와 husky를 적용해 일관된 커밋 메시지 규칙 설정',
              'TeamCity를 활용해 CI/CD 파이프라인을 구축하여 배포 자동화 및 버전 관리 프로세스 구축',
              '개발계와 운영계 환경을 분리하여 개발 환경에서 테스트 및 배포 가능하도록 설정',
            ],
          },
          {
            title: '',
            description: '',
            type: 'business',
            items: [],
          },
        ],
        blogLink: '#',
        externalLink: '#',
      },
      {
        name: 'Kyte 서비스',
        description:
          '전 세계 항공권, 호텔, 투어&티켓 등 여행에 필요한 다양한 상품을 판매하는 여행 서비스 Kyte의 유지보수를 담당했습니다.',
        technologies: ['React', 'emotion', 'TanStack Query'],
        achievements: [
          {
            title: '빌드 프로세스를 개선하여 매달 프론트엔드 팀의 100시간을 절약했습니다',
            description:
              'CRA에서 Vite로 마이그레이션하여 빌드 시간 75% 단축(10분 → 2분 30초). 팀원 7명이 일평균 5회 이상 푸시하는 환경에서 팀 전체의 월간 대기시간 약 100시간을 절약했습니다.',
            type: 'business',
            items: [],
          },
        ],
        externalLink: '#',
        blogLink: '#',
      },
    ],
  },
  {
    id: 'TMAXAI',
    companyName: 'Tmax AI',
    position: 'Frontend Engineer',
    team: 'Service Development Team',
    duration: '2023.01 - 2024.12',
    logo: {
      text: 'TMAX',
      bgColor: 'bg-teal-600',
    },
    projects: [
      {
        name: '차량 상품화 관리 플랫폼(B2B SaaS) 및 백오피스 개발',
        description:
          '기존 체카의 상품화 서비스를 기반으로, 새로운 B2B 비즈니스 모델에 맞춰 재구성한 SaaS(Software as a Service) 플랫폼입니다.',
        technologies: ['Next.js 14(app)', 'tailwind', 'TanStack Query', 'Zustand', 'recharts'],
        achievements: [
          {
            title: '기술적 도전을 통해 코드 품질을 개선했습니다',
            description: '',
            type: 'technical',
            items: [
              '상황에 따라 적절한 HTML Semantic 요소를 유연하게 사용할 수 있도록 다형성 컴포넌트 구현',
              '@types/react 18.3.5 버전 이후 다형성 컴포넌트에 forwardRef를 적용하면 타입 추론이 제대로 이루어지지 않는 문제를 발견하고 해결',
              'Next.js의 정적 최적화와 부분 프리렌더링을 활용할 수 있는 적응형 UI 구현',
            ],
          },
          {
            title: '현실의 제약을 기술로 해결했습니다',
            description: '',
            type: 'business',
            items: [
              '기술 스택에 관계없이 복잡한 UI를 재사용할 수 있도록 웹 컴포넌트 도입',
              '규정상 서버 간 통신만 가능하다는 제약 속에서 데이터 통신 방식을 설계',
            ],
          },
          {
            title: '팀이 효율적으로 일할 수 있는 환경을 구축했습니다',
            description: '',
            type: 'team',
            items: [
              '코드 품질 검사를 자동화하는 CI를 구축하여 코드베이스의 안정성 확보',
              '프로젝트 초기 기획-디자인 단계에서 디자인 시스템 구축을 주도',
            ],
          },
        ],
        externalLink: '#',
        blogLink: '#',
      },
      {
        name: 'Kyte 서비스',
        description:
          '전 세계 항공권, 호텔, 투어&티켓 등 여행에 필요한 다양한 상품을 판매하는 여행 서비스 Kyte의 유지보수를 담당했습니다.',
        technologies: ['React', 'emotion', 'TanStack Query'],
        achievements: [
          {
            title: '빌드 프로세스를 개선하여 매달 프론트엔드 팀의 100시간을 절약했습니다',
            description:
              'CRA에서 Vite로 마이그레이션하여 빌드 시간 75% 단축(10분 → 2분 30초). 팀원 7명이 일평균 5회 이상 푸시하는 환경에서 팀 전체의 월간 대기시간 약 100시간을 절약했습니다.',
            type: 'business',
            items: [],
          },
        ],
        externalLink: '#',
        blogLink: '#',
      },
    ],
  },
];

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    name: 'promi-safe',
    date: '2025.02',
    description:
      '서버 응답 데이터의 런타임 타입 불일치를 감지하기 위한 Promise 확장 라이브러리입니다.',
    tech: ['StandardSchema', 'TypeScript', 'Promise'],
    logo: 'PS',
    link: 'https://github.com/sangziii/promi-safe',
  },
  {
    name: 'Very Simple Blog',
    date: '2024.05 - 2024.06',
    description: '아주 심플한 플랫 디자인의 오픈소스 블로그 템플릿.',
    tech: ['Next.js', 'TypeScript', 'tailwind', 'contentlayer'],
    logo: 'VSB',
    link: 'https://github.com/sangziii/very-simple-blog',
  },
  {
    name: 'Na Lab',
    date: '2023.04 - 2023.07',
    description: '동료의 익명 피드백으로 자신의 성향과 장단점 등을 파악할 수 있는 서비스.',
    tech: ['Next.js', 'TypeScript', 'emotion', 'framer motion'],
    logo: 'NL',
    achievement: 'MAU 600명 이상 달성',
    link: 'https://nalab.app',
  },
  {
    name: 'Very Simple Portfolio',
    date: '2023.01 - 2023.05',
    description: '아주 심플한 플랫 디자인의 오픈소스 포트폴리오 템플릿.',
    tech: ['Next.js', 'TypeScript', 'tailwind', 'react-markdown'],
    logo: 'VSP',
    link: 'https://github.com/sangziii/very-simple-portfolio',
  },
  {
    name: 'eslint-plugin-function-return-type',
    date: '2024.01',
    description: '함수의 반환 타입을 명시하도록 하는 Typescript ESlint Plugin',
    tech: ['TypeScript', 'eslint', 'tsup'],
    logo: 'EP',
    link: 'https://www.npmjs.com/package/eslint-plugin-function-return-type',
  },
];

export const ACTIVITIES: Activity[] = [
  { title: 'Toss Frontend Accelerator 1기', date: '2024.07-08', type: 'education' },
  { title: '카카오테크 캠퍼스 2기 멘토', date: '2024.06', type: 'mentoring' },
  { title: '디프만 13기, 14기', date: '2023.04-2024.02', type: 'education' },
];

export const BOOK_STUDIES = [
  '모던 자바스크립트 Deep Dive',
  '모던 리액트 Deep Dive',
  '사용자를 끌어들이는 UX/UI의 비밀',
  '실용주의 프로그래머',
  '자바스크립트 + 리액트 디자인 패턴',
];

export const EDUCATION: Education = {
  school: '고려대학교',
  major: '일어일문학과 전공, 인문학과 문화산업 융합전공',
  duration: '2013.02 - 2020.02',
};
