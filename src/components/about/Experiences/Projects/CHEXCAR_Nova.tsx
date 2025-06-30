import { ExternalLink } from '../../../molecules/Links';
import {
  CodeBlock,
  Contribution,
  Description,
  Detail,
  Label,
  MyRole,
  ProjectContainer,
  Subtitle,
  TechStack,
} from './styles';

const CHEXCARNova = () => {
  return (
    <ProjectContainer>
      <Label>
        자동차 상품화 관리 플랫폼(B2B SaaS) 및 백오피스 개발
        <Contribution>(기여도: 100%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2025.02 ~ 현재</Detail>
      <Description>
        기존 체카의 상품화 서비스를 기반으로, 새로운 B2B 비즈니스 모델에 맞춰 재구성한 SaaS(Software
        as a Service) 플랫폼입니다. 신규 프로젝트로, 자동차 상품화 전 과정을 통합적으로 관리할 수
        있는 솔루션을 목표로 개발 중입니다.
      </Description>
      <TechStack>
        <CodeBlock>Next</CodeBlock> <CodeBlock>Typescript</CodeBlock>
        <CodeBlock>tailwindcss</CodeBlock>
        <CodeBlock>shadcn</CodeBlock> <CodeBlock>emotion</CodeBlock>
        <CodeBlock>turborepo</CodeBlock>
      </TechStack>
      <MyRole>
        <Subtitle>회사 내 주요 B2B 시스템을 서비스를 단독으로 개발했습니다.</Subtitle>
        <ul>
          <li>
            서비스 구조 설계부터 개발·운영까지 전면적으로 주도
            <ul className="innerList">
              <li>
                유사한 구조의 두 백오피스 프로젝트를 효율적으로 관리하기 위해 Monorepo 아키텍처를
                설계하고 도입
              </li>
              <li>commitlint와 husky를 적용해 일관된 커밋 메시지 규칙 설정</li>
              <li>
                TeamCity를 활용해 CI/CD 파이프라인을 구축하여 배포 자동화 및 버전 관리 프로세스 구축
              </li>
              <li>프로젝트의 레이아웃 구성 및 주요 페이지 개발 전반을 담당</li>
            </ul>
          </li>
          <li>
            사용자 인증 시스템과 라우팅 구조를 포함한 전반적인 프론트엔드 아키텍처를 설계
            <ExternalLink href="/blog/2025/Next.js로%20권한%20기반%20접근%20제어(RBAC)%20구축하기/">
              [관련 포스트]
            </ExternalLink>
            <ul className="innerList">
              <li>RBAC(Role-Based Access Control) 방식으로 사용자 권한에 따라 페이지 접근 제어</li>
              <li>
                <CodeBlock>Next.js</CodeBlock>의 middleware를 활용한 쿠키 기반 인증으로 서버 사이드
                검증 로직 구현
              </li>
            </ul>
          </li>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default CHEXCARNova;
