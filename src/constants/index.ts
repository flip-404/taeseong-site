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
      '옆자리 동료가 편안하게 읽을 수 있는 코드를 작성하기 위해 꾸준히 학습하고 소통합니다.',
    hasTitle: true,
  },
  {
    description:
      '더 나은 방향을 함께 고민하는 과정을 소중히 여기며, 팀 전체의 시너지를 높이는 개발을 지향합니다.',
    hasTitle: false,
  },
  {
    title: '제품에 무한한 애정을 쏟습니다',
    description:
      '제품은 저와 팀의 가치를 증명하는 결과물입니다. 직접 만든 서비스에 책임감을 갖고, 더 나은 결과를 위해 끝까지 파고드는 성향을 가지고 있습니다.',
    hasTitle: true,
  },
  {
    description:
      '성능 최적화에 깊은 관심을 가지고 있으며, 이를 위해 다양한 접근법을 실험하고 개선해 나갑니다.',
    hasTitle: false,
  },
];

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
              '유사한 구조의 두 백오피스 프로젝트를 효율적으로 관리하기 위해 Monorepo 아키텍처를 설계하고 도입',
              'commitlint와 husky를 적용해 일관된 커밋 메시지 규칙 설정',
              'TeamCity를 활용해 CI/CD 파이프라인을 구축하여 배포 자동화 및 버전 관리 프로세스 구축',
              '개발계와 운영계 환경을 분리하여 개발 환경에서 테스트 및 배포 가능하도록 설정',
            ],
          },
          {
            title: '프로젝트의 성격에 맞는 아키텍처를 설계하고 적용했습니다',
            description: '',
            type: 'business',
            items: [
              'RBAC(Role-Based Access Control) 방식으로 사용자 권한에 따라 페이지 접근 제어 (포스트)',
              'Next.js의 middleware를 활용한 쿠키 기반 인증으로 서버 사이드 검증 로직 구현',
            ],
          },
        ],
        blogLink: '#',
        externalLink: '#',
      },
      {
        name: 'CHEXCAR 홈페이지',
        description: '체카 공식 홈페이지를 단독 개발하여 총 7개의 핵심 페이지 구축했습니다.',
        technologies: ['Next.js 14(app)', 'emotion', 'vanilla-extract css'],
        achievements: [
          {
            title: '렌더링 최적화와 웹 표준을 적극 준수하여 높은 성능 점수를 기록했습니다',
            description: '',
            type: 'business',
            items: [
              'Lighthouse 기준의 웹 성능 성능(92), 접근성(100), SEO(100), PWA(100)으로 점수 기록',
              '스크린 리더 테스트 및 시맨틱 태그와 ARIA 속성을 활용한 웹 접근성 준수 (결과 화면)',
              'transform 속성 기반 GPU 가속과 이미지·비디오 포맷 변환을 통해 렌더링 성능 개선 (포스트)',
            ],
          },
        ],
        externalLink: '#',
        blogLink: '#',
      },
      {
        name: '상품화 서비스 앱',
        description:
          '차량 상품화 서비스를 제공하는 업체가 이용하는 파트너스 앱의 유지보수를 맡아 개발했습니다.',
        technologies: ['React Native', 'TypeScript', 'tanstack query', 'Scss'],
        achievements: [
          {
            title: '',
            description: '',
            type: 'business',
            items: [
              'useLayoutEffect를 활용하여 모달 컴포넌트의 깜빡임 현상과 레이아웃 시프트를 해결',
              '잦은 API 호출이 발생하던 구조를 TanStack Query 기반으로 리팩토링하여 불필요한 서버 통신과 스켈레톤 UI 노출 감소',
            ],
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
        name: '가톨릭대백과',
        description:
          '가톨릭대사전의 디지털화를 위해 OCR 기반 검수 페이지를 개발하였으며, 이를 통해 오인식된 내용을 쉽게 수정할 수 있는 기능을 제공했습니다. 이 검수 시스템을 활용해 약 45,000개의 사전 데이터를 한국가톨릭대사전 홈페이지에 등재하였습니다.',
        technologies: ['Next.js 14(app)', 'tailwind', 'TanStack Query', 'Zustand', 'recharts'],
        achievements: [
          {
            title: '',
            description: '',
            type: 'business',
            items: [
              '텍스트, 이미지 캡션, 테이블 등 다양한 형식의 데이터를 입력할 수 있는 커스텀 에디터 개발',
              '오탈자 검출 및 검색어 하이라이팅 기능 추가',
              '신속한 검수 및 수정을 위한 찾기/바꾸기 기능 구현',
            ],
          },
        ],
        externalLink: 'https://encyclopedia.catholic.or.kr/',
        blogLink: '#',
      },
      {
        name: 'KGM 챗봇',
        description:
          'KGM 공식 홈페이지내에서 고객이 원하는 정보를 쉽게 찾을 수 있도록 도와주는 챗봇 서비스입니다.',
        technologies: ['Next.js 14(app)', 'tailwind', 'TanStack Query', 'Zustand', 'recharts'],
        achievements: [
          {
            title: '',
            description: '',
            type: 'business',
            items: ['메시지 컴포넌트 및 챗봇 UI 개발', 'KGM API 연동 및 채팅 상태 관리 구현'],
          },
        ],
        externalLink: 'https://encyclopedia.catholic.or.kr/',
        blogLink: '#',
      },
      {
        name: 'TmaxAI 홈페이지',
        description:
          'TmaxAI 공식 홈페이지입니다. STT(음성 인식), TTS(텍스트 음성 변환), OCR(문자 인식) 등의 AI 기술을 직접 체험할 수 있는 기능을 제공하며, AI 기술 도입을 원하는 기업이나 개인을 위한 문의 기능을 지원합니다.',
        technologies: ['Next.js 14(app)', 'tailwind', 'TanStack Query', 'Zustand', 'recharts'],
        achievements: [
          {
            title: '웹 워커를 사용해 렌더링 속도를 5분의 1로 개선했습니다',
            description: '',
            type: 'business',
            items: [
              '최대 수백개의 바운딩 박스를 렌더링하는 페이지에서 웹 워커를 사용해 렌더링 속도를 5분의 1로 개선',
              '인터랙티브 스크롤 애니메이션 개발 및 쓰로틀링 기법을 통한 성능 저하 방지',
              'React-hook-form을 활용한 기술 도입 문의 폼 개발',
            ],
          },
        ],
        externalLink: 'https://encyclopedia.catholic.or.kr/',
        blogLink: '#',
      },
      {
        name: 'RGNews',
        description:
          'KGM 공식 홈페이지내에서 고객이 원하는 정보를 쉽게 찾을 수 있도록 도와주는챗봇 서비스입니다.',
        technologies: ['Next.js 14(app)', 'tailwind', 'TanStack Query', 'Zustand', 'recharts'],
        achievements: [],
        externalLink: 'https://encyclopedia.catholic.or.kr/',
        blogLink: '#',
      },
      {
        name: '하이퍼챗봇',
        description:
          'KGM 공식 홈페이지내에서 고객이 원하는 정보를 쉽게 찾을 수 있도록 도와주는챗봇 서비스입니다.',
        technologies: ['Next.js 14(app)', 'tailwind', 'TanStack Query', 'Zustand', 'recharts'],
        achievements: [],
        externalLink: 'https://encyclopedia.catholic.or.kr/',
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
