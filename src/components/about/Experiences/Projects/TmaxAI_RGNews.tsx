import {
  CodeBlock,
  Contribution,
  Description,
  Detail,
  Label,
  MyRole,
  ProjectContainer,
  TechStack,
  Subtitle
} from "./styles";
import { ExternalLink } from "../../../molecules/Links";

const RGNews = () => {
  return (
    <ProjectContainer>
      <Label>
        RGNews <Contribution>&nbsp;(기여도: 50%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2023.06 - 2023.11</Detail>
      <Description>
        개인 맞춤형 뉴스 서비스로, 사용자의 관심사에 맞춘 뉴스를 제공하는
        서비스입니다. 사용자의 검색 기록, 읽은 기사, 선호하는 주제 등을 분석하여
        최적화된 뉴스 콘텐츠를 추천하며, 실시간으로 업데이트되는 최신 뉴스를
        제공합니다
      </Description>
      <TechStack>
        <CodeBlock>React</CodeBlock> <CodeBlock>Typescript</CodeBlock>
        <CodeBlock>mobx</CodeBlock> <CodeBlock>styled-components</CodeBlock>
      </TechStack>
      <MyRole>
        <Label>What I did.</Label>
        <Subtitle>유저의 불편함을 찾고, 주도적으로 개선했습니다.</Subtitle>
        <ul>
          <li>
            숏 뉴스 컴포넌트의 스와이프 전환 시 부자연스러운 화면 전환 발생 <ExternalLink href="/detail/RGNews/detail_1">[상세]</ExternalLink>
            <ul className="innerList">
              <li>디자인 팀에 동적 애니메이션을 제안 및 구현</li>
              <li>
                윈도잉 기법을 도입하여 현재 보고 있는 숏뉴스 주변의 일정 범위만 렌더링하는 작업 진행
              </li>
            </ul>
          </li>
        </ul>
        <Subtitle>사용자 경험 전반에 필요한 핵심 기능을 설계하고, 성능과 접근성을 함께 고려했습니다.</Subtitle>
        <ul>
          <li>
            종합 검색 페이지 구현 및 렌더링·서버 호출 최적화 <ExternalLink href="/detail/RGNews/detail_2">[상세]</ExternalLink>
          </li>
          <li>
            뉴스 검색 무한 스크롤 구현 및 에러 바운더리로 재시도 처리 <ExternalLink href="/detail/RGNews/detail_3">[상세]</ExternalLink>
          </li>
          <li>
            관심 뉴스/언론사 저장 및 드래그 앤 드롭 UI 구현 <ExternalLink href="/detail/RGNews/detail_4">[상세]</ExternalLink>
          </li>
          <li>
            Web Audio API 기반 TTS(음성 변환) 구현 <ExternalLink href="/detail/RGNews/detail_5">[상세]</ExternalLink>
          </li>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default RGNews;
