import { WorkExperience, PersonalProject, Activity, Education, Award } from '../types';
import ChexcarLogo from '../images/chexcar_logo.jpg';
import TmaxLogo from '../images/tmaxai_logo.png';

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
      text: 'CHEXCAR',
      image: ChexcarLogo,
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
      text: 'Tmax AI',
      image: TmaxLogo,
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
    name: '남비티아이',
    date: '2025.08월 배포 예정',
    description: '친구들이 생각하는 내 MBTI는 과연 무엇일까? 추측을 통해 알아보는 서비스',
    tech: ['Next.js', 'Zustand', 'TypeScript', 'Prisma', 'Supabase', 'Tailwindcss'],
    logo: 'Nambti',
    link: 'https://nambti.site/',
  },
  {
    name: 'K-캔버라',
    date: '2025.01 - 현재',
    description:
      '1인 개발로 호주 캔버라 거주 한인들을 위한 유일한 커뮤니티 웹사이트를 운영 중이며, 활성화를 위해 캔버라 한인회와의 협력을 추진하고 있습니다.',
    tech: ['Next.js', 'Zustand', 'TypeScript', 'Prisma', 'Supabase', 'Emotion'],
    logo: 'KCanberra',
    link: 'https://www.kcanberra.com/',
  },
  {
    name: 'net-perf',
    date: '2022.06 - 2022.12',
    description:
      'net-perf는 네트워크 성능을 측정하는 웹 도구입니다. 성능 개선이 이루어진 지점을 시각적으로 보여줌으로써 효율적인 분석을 제공합니다.',
    tech: ['React', 'Kernal', 'iperf3', 'ftrace'],
    logo: 'net-perf',
    achievement: '한국지식정보기술학회 2022년 제17권 제4호(8월호) 논문 게재',
    link: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002869064',
  },
];

export const ACTIVITIES: Activity[] = [
  { title: '소프트웨어 마에스트로 13기', date: '2022.04-11', type: 'education' },
  {
    title: '숭실대학교 SW 멘토링 멘토 참여',
    date: '2021.01-2022.12',
    type: 'mentoring',
  },
  {
    title: 'SQL 개발자(SQLD) - 한국데이터진흥원',
    date: '2023.12.15',
    type: 'certificate',
  },
  {
    title: '정보처리기사(검정형) - 한국산업인력공단',
    date: '2023.11.15',
    type: 'certificate',
  },
  {
    title: '네트워크관리사 - 한국정보통신자격협회',
    date: '2022.07.12',
    type: 'certificate',
  },
  {
    title: '데이터분석 준전문가(ADsP) - 한국데이터진흥원',
    date: '2020.09.29',
    type: 'certificate',
  },
];

export const AWARD: Award[] = [
  {
    title: 'SW중심대학협의회 인재페스티벌 우수상 수상',
    date: '2022.12.08',
    description: [
      '텍스트를 수어로 번역하는 웹 애플리케이션 개발',
      '우수팀 선정으로 동대문디자인플라자(DDP) 아트홀 시연 부스 운영',
    ],
  },
  {
    title: '숭실대학교 소프트웨어 공모전 학장상 수상',
    date: '2022.09.16',
    description: ['안전모 검출 프로그램 개발'],
  },
  {
    title: 'SW 중심대학 공동해커톤 참여 한국소프트웨어산업협회장상 수상',
    date: '2022.06.24',
    description: ['법률 상담 챗봇 개발'],
  },
];

export const EDUCATION: Education = {
  school: '숭실대학교',
  major: '컴퓨터학부',
  duration: '2016.03 - 2023.02',
};
