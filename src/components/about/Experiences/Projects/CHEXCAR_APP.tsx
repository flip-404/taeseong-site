import { ExternalLink, InternalLink } from "../../../molecules/Links";
import {
  CodeBlock,
  Description,
  Detail,
  Label,
  ProjectContainer,
} from "./styles";

const CHEXCARApp = () => {
  return (
    <ProjectContainer>
      <Label>상품화 서비스 앱</Label>
      <Detail>Frontend Engineer</Detail>
          <Detail>2025.01 ~ 현재</Detail>
          
          <Description>
             팀에 중간 합류하여 CHEXCAR 서비스를 이용할 수 있는 원스톱 중고차 상품화 플랫폼 앱 개발을 맡아 작업하고 있습니다. 중고차 매매업체와 개인 고객을 위한   <ExternalLink
          href="https://play.google.com/store/apps/details?id=kr.co.chexcar.dealer"
          onClick={(event) => {
            event.preventDefault();
            window.open("https://play.google.com/store/apps/details?id=kr.co.chexcar.dealer", "_blank");
          }}
        >
          딜러 앱
        </ExternalLink>과 상품화 서비스를 제공하는 업체가 이용하는 <ExternalLink
          href="https://play.google.com/store/apps/details?id=kr.co.chexcar.partners"
          onClick={(event) => {
            event.preventDefault();
            window.open("https://play.google.com/store/apps/details?id=kr.co.chexcar.partners", "_blank");
          }}
        >
          파트너스 앱
        </ExternalLink>을 개발했습니다.
        <CodeBlock>React</CodeBlock>, <CodeBlock>Typescript</CodeBlock>,&nbsp;
        <CodeBlock>tanstack-query</CodeBlock>, <CodeBlock>Scss</CodeBlock>를
        이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
        <ul>
            <li>
            상품화 서비스 프로세스 중 잦은 API를 호출하던 방식에서, TanStack Query를 활용한 캐싱 로직으로 리팩토링하여 최소한의 API 호출을 할 수 있도록 설계를 개선했습니다. 렌더링 시마다 발생하던 API 요청과 그로인해 발생하던 불필요한 리렌더링을 대폭 개선했습니다. &nbsp;
            <InternalLink href="/">
              [상세 코드]
            </InternalLink>
          </li>

        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default CHEXCARApp;
