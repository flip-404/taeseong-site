import React from 'react';
import {
  Mail,
  Github,
  ExternalLink,
  Calendar,
  MapPin,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  BookOpen,
} from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 print:bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 print:border-gray-300 print:bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">김태성</h1>
              <p className="text-lg text-blue-600 font-medium">Frontend Developer</p>
            </div>
            <div className="flex items-center space-x-6 print:space-x-4">
              <a
                href="mailto:"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={20} />
                <span className="hidden sm:inline">Github</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ExternalLink size={20} />
                <span className="hidden sm:inline">Blog</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Philosophy Section */}
        <section className="mb-12 print:mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 print:shadow-none print:border-gray-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <User className="mr-3 text-blue-600" size={24} />
              Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl print:bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-2">옆자리 동료를 위해 일합니다</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    코드의 가독성은 절대적인 것이 아니라고 생각합니다. 옆자리 동료가 편안하게 읽을
                    수 있는 코드를 작성하기 위해 공부하고, 의견을 나누며 개발하고 있습니다.
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-xl print:bg-gray-50">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    유지보수가 용이한 코드를 작성하는 것은 미래의 저를 위한 일이라고 생각합니다.
                    업보를 쌓지 않기 위해 다양한 지식을 학습하고, 적용합니다.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-xl print:bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    제품에 무한한 애정을 쏟습니다
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    제품은 팀이 낳은 자식이라고 생각합니다. '우리 이거 적용해 볼까요?', '이렇게 하면
                    유저 경험이 더 좋아지지 않을까요?' 와 같은 말을 나누며 제품을 성장시키는 것이
                    즐겁습니다.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl print:bg-gray-50">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    '상조님 덕에 편해졌어요' 라는 말을 듣는 것이 좋습니다. CI 구축, 빌드 시간 개선,
                    반복적인 작업의 자동화 등 팀의 생산성 향상을 위해 적극적으로 기여하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="mr-3 text-blue-600" size={24} />
            Work Experience
          </h2>

          {/* 토스증권 */}
          <div className="mb-8 print:mb-6">
            <div className="flex">
              <div className="w-20 flex-shrink-0 mr-6 print:w-16 print:mr-4">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg sticky top-24 print:static">
                  토스
                </div>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow-sm border border-blue-100 p-6 print:shadow-none print:border-gray-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">토스증권</h3>
                    <p className="text-blue-600 font-medium">Frontend Engineer</p>
                    <p className="text-gray-600 text-sm">Securities Lending Silo</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      2025.07 - 재직중
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TIDESQUARE */}
          <div className="mb-8 print:mb-6">
            <div className="flex">
              <div className="w-20 flex-shrink-0 mr-6 print:w-16 print:mr-4">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm sticky top-24 print:static">
                  TIDE
                </div>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow-sm border border-blue-100 p-6 print:shadow-none print:border-gray-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">TIDESQUARE</h3>
                    <p className="text-blue-600 font-medium">Frontend Engineer</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      2024.06 - 2025.06
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* PRIVIA 프로젝트 */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      PRIVIA 여행 서비스
                      <ExternalLink size={16} className="ml-2 text-gray-400" />
                    </h4>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      현대카드와 제휴를 맺은 종합 온라인 여행 서비스입니다. 25년 4월 완료 예정인
                      서비스 전면 리뉴얼 프로젝트에서 항공 서비스 파트의 개발에 참여하고 있습니다.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Next.js 14(app)', 'tailwind', 'TanStack Query', 'i18next'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium print:bg-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">
                          기술적 도전을 통해 코드 품질을 개선했습니다
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            상황에 따라 적절한 HTML Semantic 요소를 유연하게 사용할 수 있도록 다형성
                            컴포넌트 구현
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            @types/react 18.3.5 버전 이후 다형성 컴포넌트에 forwardRef를 적용하면
                            타입 추론이 제대로 이루어지지 않는 문제를 발견하고 해결
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            Next.js의 정적 최적화와 부분 프리렌더링을 활용할 수 있는 적응형 UI 구현
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">
                          현실의 제약을 기술로 해결했습니다
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            기술 스택에 관계없이 복잡한 UI를 재사용할 수 있도록 웹 컴포넌트 도입
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            규정상 서버 간 통신만 가능하다는 제약 속에서 데이터 통신 방식을 설계
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">
                          팀이 효율적으로 일할 수 있는 환경을 구축했습니다
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            코드 품질 검사를 자동화하는 CI를 구축하여 코드베이스의 안정성 확보
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            프로젝트 초기 기획-디자인 단계에서 디자인 시스템 구축을 주도
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Kyte 프로젝트 */}
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      Kyte 서비스
                      <ExternalLink size={16} className="ml-2 text-gray-400" />
                    </h4>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      전 세계 항공권, 호텔, 투어&티켓 등 여행에 필요한 다양한 상품을 판매하는 여행
                      서비스 Kyte의 유지보수를 담당했습니다.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {['React', 'emotion', 'TanStack Query'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium print:bg-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-xl print:bg-gray-50">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-gray-900 flex-1">
                          빌드 프로세스를 개선하여 매달 프론트엔드 팀의 100시간을 절약했습니다
                        </h5>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 flex items-center px-2 py-1 bg-white/80 hover:bg-white rounded-md text-xs font-medium text-gray-600 hover:text-blue-600 transition-all duration-200 print:hidden group"
                          title="관련 블로그 포스트 보기">
                          <ExternalLink
                            size={12}
                            className="mr-1 group-hover:scale-110 transition-transform"
                          />
                          포스트
                        </a>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        CRA에서 Vite로 마이그레이션하여 빌드 시간 75% 단축(10분 → 2분 30초). 팀원
                        7명이 일평균 5회 이상 푸시하는 환경에서 팀 전체의 월간 대기시간 약 100시간을
                        절약했습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pozalabs */}
          <div className="mb-8 print:mb-6">
            <div className="flex">
              <div className="w-20 flex-shrink-0 mr-6 print:w-16 print:mr-4">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm sticky top-24 print:static">
                  POZA
                </div>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow-sm border border-blue-100 p-6 print:shadow-none print:border-gray-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Pozalabs</h3>
                    <p className="text-blue-600 font-medium">Frontend Engineer</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      2023.08 - 2024.05
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">LAIVE 서비스</h4>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      Multi-Step-Form 형태의 인공지능 작곡 및 편집 웹 서비스 LAIVE의 Zero to One
                      개발을 담당했습니다.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Next.js(page)', 'tailwind', 'TanStack Query'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium print:bg-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-purple-50 rounded-xl print:bg-gray-50">
                        <h5 className="font-semibold text-gray-900 mb-2">
                          선언적인 코딩 스타일 도입
                        </h5>
                        <p className="text-sm text-gray-700">
                          ErrorBoundary와 Suspense를 팀에 전파하여 비동기 상태 처리의 관심사를 분리
                        </p>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-xl print:bg-gray-50">
                        <h5 className="font-semibold text-gray-900 mb-2">데이터가 흐르는 조직</h5>
                        <p className="text-sm text-gray-700">
                          Mixpanel과 Hotjar를 도입하여 사용자 행동을 분석하고 제품을 개선
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 비바리퍼블리카 */}
          <div className="mb-8 print:mb-6">
            <div className="flex">
              <div className="w-20 flex-shrink-0 mr-6 print:w-16 print:mr-4">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm sticky top-24 print:static">
                  TOSS
                </div>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow-sm border border-blue-100 p-6 print:shadow-none print:border-gray-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">비바리퍼블리카</h3>
                    <p className="text-blue-600 font-medium">UX Engineer Assistant</p>
                    <p className="text-gray-600 text-sm">Design Platform Team</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      2023.01 - 2023.08
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl print:bg-gray-50">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      TDS(Toss Design System) 유지보수
                    </h5>
                    <p className="text-sm text-gray-700">
                      토스팀 전체가 사용하는 컴포넌트를 만들고 유지보수하며, 생산성을 저해하는
                      문제를 찾고 해결했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Code className="mr-3 text-blue-600" size={24} />
            Projects
          </h2>

          <div className="grid gap-6">
            {[
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
                description:
                  '동료의 익명 피드백으로 자신의 성향과 장단점 등을 파악할 수 있는 서비스.',
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
            ].map((project, index) => (
              <div key={index} className="flex">
                <div className="w-20 flex-shrink-0 mr-6 print:w-16 print:mr-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center text-white font-bold text-xs sticky top-24 print:static">
                    {project.logo}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-sm border border-blue-100 p-6 print:shadow-none print:border-gray-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors print:text-gray-600">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      {project.achievement && (
                        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mt-2 print:bg-gray-200">
                          {project.achievement}
                        </div>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {project.date}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="mr-3 text-blue-600" size={24} />
            Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 print:shadow-none print:border-gray-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">교육 & 멘토링</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">
                    Toss Frontend Accelerator 1기
                  </span>
                  <span className="text-xs text-gray-500">2024.07-08</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">
                    카카오테크 캠퍼스 2기 멘토
                  </span>
                  <span className="text-xs text-gray-500">2024.06</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">디프만 13기, 14기</span>
                  <span className="text-xs text-gray-500">2023.04-2024.02</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 print:shadow-none print:border-gray-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen size={20} className="mr-2 text-blue-600" />북 스터디
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• 모던 자바스크립트 Deep Dive</div>
                <div>• 모던 리액트 Deep Dive</div>
                <div>• 사용자를 끌어들이는 UX/UI의 비밀</div>
                <div>• 실용주의 프로그래머</div>
                <div>• 자바스크립트 + 리액트 디자인 패턴</div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" size={24} />
            Education
          </h2>

          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 print:shadow-none print:border-gray-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">고려대학교</h3>
                <p className="text-gray-600">일어일문학과 전공, 인문학과 문화산업 융합전공</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  2013.02 - 2020.02
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 print:border-gray-300 mt-12 print:mt-8">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-600 text-sm">© 2025 김태성. Frontend Developer Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
