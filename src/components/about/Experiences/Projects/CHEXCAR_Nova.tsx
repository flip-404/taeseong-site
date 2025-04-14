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
        <Label>What I did. (기여도: 100%)</Label>
        <ul>
          <li>
            프론트엔드 아키텍처 설계 및 초기 세팅을 진행했습니다. 권한별 페이지
            접근 제어 및 권한 관리 기능을 구현했습니다. &nbsp;
            <InternalLink href="/blog/2025/Next.js로%20권한%20기반%20접근%20제어(RBAC)%20구축하기/">
              [관련 포스트]
            </InternalLink>
          </li>
        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default CHEXCARNova;
