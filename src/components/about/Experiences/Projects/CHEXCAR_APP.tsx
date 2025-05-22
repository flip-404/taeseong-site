import { ExternalLink } from "../../../molecules/Links";
import {
  CodeBlock,
  Contribution,
  Description,
  Detail,
  Label,
  MyRole,
  ProjectContainer,
  TechStack,
} from "./styles";

const CHEXCARApp = () => {
  return (
    <ProjectContainer>
      <Label>
        상품화 서비스 앱 <Contribution>(기여도: 25%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2025.01 ~ 현재</Detail>

      <Description>
        중고차 매매업체와 개인 고객을 위한
        <ExternalLink
          href="https://play.google.com/store/apps/details?id=kr.co.chexcar.dealer"
          onClick={(event) => {
            event.preventDefault();
            window.open(
              "https://play.google.com/store/apps/details?id=kr.co.chexcar.dealer",
              "_blank"
            );
          }}
        >
          딜러 앱
        </ExternalLink>
        과 상품화 서비스를 제공하는 업체가 이용하는
        <ExternalLink
          href="https://play.google.com/store/apps/details?id=kr.co.chexcar.partners"
          onClick={(event) => {
            event.preventDefault();
            window.open(
              "https://play.google.com/store/apps/details?id=kr.co.chexcar.partners",
              "_blank"
            );
          }}
        >
          파트너스 앱
        </ExternalLink>
        의 유지보수를 맡아 개발했습니다. 레이아웃 시프트 현상 개선과 캐싱 로직
        최적화에 집중하여 앱의 성능과 사용자 경험을 향상시키는 것에
        주력했습니다.
      </Description>
      <TechStack>
        <CodeBlock>React</CodeBlock> <CodeBlock>Typescript</CodeBlock>
        <CodeBlock>tanstack-query</CodeBlock> <CodeBlock>Scss</CodeBlock>
      </TechStack>
      <MyRole>
        <Label>What I did.</Label>
        <ul>
          <li>
            모달 컴포넌트의 깜빡임 현상과 레이아웃 시프트를 해결하기 위해
            useLayoutEffect를 활용하여 DOM 조작하는 방법으로 성능 개선
          </li>
          <li>
            기존 프로세스 전반에서 잦은 API 호출이 발생하던 구조를 TanStack
            Query 기반의 캐싱 로직으로 리팩토링하여 불필요한 서버 통신과
            스켈레톤 UI 노출 감소
          </li>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default CHEXCARApp;
