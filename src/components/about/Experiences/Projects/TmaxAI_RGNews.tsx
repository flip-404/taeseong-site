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
        <ul>
          <li>
            스와이프 기반 뉴스 페이지 개선
            <ExternalLink href="/detail/RGNews/detail_1">[상세]</ExternalLink>
            <ul className="innerList">
              <li>
                사용자 피드백을 반영하여 스와이프 전환 시 opacity를 동적으로
                조정하여 자연스러운 전환 효과 구현
              </li>
              <li>
                렌더링 최적화를 통한 성능 향상 (현재 아이템 주변만 렌더링)
              </li>
            </ul>
          </li>
          <li>
            종합 검색 페이지 구현
            <ExternalLink href="/detail/RGNews/detail_2">[상세]</ExternalLink>
            <ul className="innerList">
              <li>검색창, 맞춤/트렌딩/연관 검색어, 검색 결과 제공</li>
              <li>
                사용자 검색 상태 추적으로 불필요한 렌더링과 서버 호출 최소화
              </li>
            </ul>
          </li>
          <li>
            무한 스크롤 뉴스 검색 구현
            <ExternalLink href="/detail/RGNews/detail_3">[상세]</ExternalLink>
            <ul className="innerList">
              <li>Intersection Observer 활용한 API 연동 및 페이징 처리 구현</li>
              <li>
                에러 바운더리 구현을 통한 런타임 에러 감지 및 재시도 기능 구현
              </li>
            </ul>
          </li>
          <li>
            마이 페이지 기능 개발
            <ExternalLink href="/detail/RGNews/detail_4">
              [결과 화면]
            </ExternalLink>
            <ul className="innerList">
              <li>관심 뉴스 및 언론사 저장/관리 기능</li>
              <li>react-beautiful-dnd 활용한 드래그 앤 드롭 인터페이스 구현</li>
            </ul>
          </li>
          <li>
            TTS(Text-to-Speech) 기능 구현
            <ExternalLink href="/detail/RGNews/detail_5">[상세]</ExternalLink>
            <ul className="innerList">
              <li>Web Audio API를 활용한 브라우저 내 텍스트-음성 변환</li>
              <li>재사용 가능한 React 커스텀 훅 개발</li>
            </ul>
          </li>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default RGNews;
