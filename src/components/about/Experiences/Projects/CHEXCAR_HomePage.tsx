import { ExternalLink, InternalLink } from "../../../molecules/Links";
import {
  CodeBlock,
  Description,
  Detail,
  Label,
  ProjectContainer,
} from "./styles";

const CHEXCARHomePage = () => {
  return (
    <ProjectContainer>
      <Label>CHEXCAR 홈페이지</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2025.03</Detail>
      <Description>
        <ExternalLink
          href="https://chexcar.co.kr/"
          onClick={(event) => {
            event.preventDefault();
            window.open("https://chexcar.co.kr/", "_blank");
          }}
        >
          CHEXCAR의 공식 홈페이지
        </ExternalLink>
        를 1인 개발로 제작하였으며, 총 7개의 주요 페이지로 구성되어 있습니다.
        반응형 디자인을 적용해 데스크탑, 태블릿, 모바일 등 다양한 디바이스에서
        최적화된 사용자 경험을 제공합니다. Google Lighthouse 기준 성능 점수는
        92점을 기록하였으며, 현재도 꾸준한 업데이트를 통해 성능을 개선하고
        있습니다. 또한, CI/CD 환경을 직접 설정하여 배포 자동화까지
        구현하였습니다.
        <br />
        <CodeBlock>Next</CodeBlock>, <CodeBlock>Typescript</CodeBlock>,&nbsp;
        <CodeBlock>emotion</CodeBlock>, <CodeBlock>vanilla-extract</CodeBlock>을
        이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did. (기여도: 100%)</Label>
        <ul>
          <li>
            다양한 페이지에 position: sticky 속성과 스크롤 이벤트를 활용하여
            인터랙션 기능을 구현했습니다. 각 화면별로 리액트 Profiler를 통해
            성능을 측정하고, 불필요한 리렌더링을 방지하기 위해 transform 속성을
            활용하여 GPU 가속을 적용했습니다. &nbsp;
            <InternalLink href="/detail/TmaxAI_Homepage/detail_1">
              [상세 코드]
            </InternalLink>
            {/* https://velog.io/@flip_404/%EC%B2%B4%EC%B9%B4-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81-%ED%9A%9F%EC%88%98-%EC%B8%A1%EC%A0%95 */}
          </li>
        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default CHEXCARHomePage;
