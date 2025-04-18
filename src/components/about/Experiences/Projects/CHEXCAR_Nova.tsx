import { ExternalLink, InternalLink } from "../../../molecules/Links";
import {
  CodeBlock,
  Description,
  Detail,
  Label,
  ProjectContainer,
} from "./styles";

const CHEXCARNova = () => {
  return (
    <ProjectContainer>
      <Label>NOVA (B2B SaaS)</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2025.04 ~ 현재</Detail>
      <Description>
        기존 체카의 상품화 서비스를 기반으로, 새로운 B2B 비즈니스 모델에 맞춰
        재구성한 SaaS(Software as a Service) 플랫폼입니다. 신규 프로젝트로,
        자동차 상품화 전 과정을 통합적으로 관리할 수 있는 솔루션을 목표로 개발
        중입니다.
        <br />
        <CodeBlock>Next</CodeBlock>, <CodeBlock>Typescript</CodeBlock>,&nbsp;
        <CodeBlock>shadcn</CodeBlock>, <CodeBlock>emotion</CodeBlock>,
        <CodeBlock>vanilla-extract</CodeBlock>을 이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
        <ul>
          
          <li>
            초기 프로젝트 세팅을 담당하여 개발 환경을 구축하고, commitlint와 husky를 적용해 일관된 커밋 메시지 규칙을 설정했습니다. 또한, TeamCity를 활용해 CI/CD 파이프라인을 구축하여 배포 자동화 및 버전 관리 프로세스를 구축했습니다.
          </li>
          <li>라우팅 구조와 상태 관리 전략을 포함한 전반적인 프론트엔드 아키텍처를 설계했습니다. RBAC(Role-Based Access Control) 방식으로 사용자 권한에 따라 페이지 접근을 제어하고, <CodeBlock>Next.js</CodeBlock>의 middleware와 클라이언트 사이드 재검증을 통해 보안성과 사용성을 동시에 강화했습니다.  &nbsp;
            <InternalLink href="/blog/2025/Next.js로%20권한%20기반%20접근%20제어(RBAC)%20구축하기/">
              [관련 포스트]
            </InternalLink></li>
        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default CHEXCARNova;
