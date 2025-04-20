import { ExternalLink } from "../../../molecules/Links";
import { LinkIcon } from "../../../molecules/ProjectLink";
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

const CHEXCARHomePage = () => {
  return (
    <ProjectContainer>
      <Label
        className="hasLink"
        onClick={() => window.open("https://chexcar.co.kr/", "_blank")}
      >
        CHEXCAR 홈페이지 <LinkIcon />
        <Contribution>(기여도: 100%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2025.03</Detail>
      <Description>
        체카 공식 홈페이지를 단독 개발하여 총 7개의 핵심 페이지 구축했습니다.
        다양한 화면 크기에 최적화된 반응형 디자인을 적용해 데스크탑부터 태블릿,
        모바일까지 일관된 사용자 경험을 제공했습니다. CI/CD 파이프라인을
        구축하여 배포 자동화 시스템을 구현했습니다.
      </Description>
      <TechStack>
        <CodeBlock>Next</CodeBlock> <CodeBlock>Typescript</CodeBlock>
        <CodeBlock>emotion</CodeBlock> <CodeBlock>vanilla-extract</CodeBlock>
      </TechStack>
      <MyRole>
        <Label>What I did. </Label>
        <ul>
          <li>
            각 페이지의 인터랙션 UI 성능을 React Profiler로 측정하여 불필요한
            리렌더링 방지
            <ExternalLink href="/detail/CHEXCAR_Homepage/detail_1">
              [상세]
            </ExternalLink>
            <ul className="innerList">
              <li>transform 속성 기반 GPU 가속 적용</li>
            </ul>
          </li>

          <li>
            Lighthouse 기준의 웹 성능 성능(92), 접근성(100), SEO(100),
            PWA(100)으로 점수 기록
            <ExternalLink href="/detail/CHEXCAR_Homepage/detail_2">
              [결과 화면]
            </ExternalLink>
            <ul className="innerList">
              <li>
                스크롤 이벤트 최적화와 이미지·비디오 포맷 변환을 통해 렌더링
                성능 개선
              </li>
              <li>시맨틱 태그와 ARIA 속성을 활용해 웹 접근성 개선</li>
            </ul>
          </li>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default CHEXCARHomePage;
