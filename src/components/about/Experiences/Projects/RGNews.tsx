import { Link } from "gatsby";
import {
  CodeBlock,
  Description,
  Detail,
  Label,
  ProjectContainer,
} from "./styles";
import { InternalLink } from "../../../molecules/Links";

const RGNews = () => {
  return (
    <ProjectContainer>
      <Label>RGNews</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2023.06 - 2023.11</Detail>
      <Description>
        개인 맞춤형 뉴스 서비스로, 사용자의 관심사에 맞춘 뉴스를 제공하는
        서비스입니다. 사용자의 검색 기록, 읽은 기사, 선호하는 주제 등을 분석하여
        최적화된 뉴스 콘텐츠를 추천하며, 실시간으로 업데이트되는 최신 뉴스를
        제공합니다
        <br />
        <br />
        <CodeBlock>React</CodeBlock>, <CodeBlock>Typescript</CodeBlock>,{" "}
        <CodeBlock>mobx</CodeBlock>, <CodeBlock>styled-components</CodeBlock>를
        이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
        <ul>
          <li>
            숏 뉴스 형식의 비디오를 제공하는 뉴스 페이지에서 스와이프 전환 시
            부자연스럽다는 피드백을 반영하여, 스와이프 방향과 거리 기반으로
            동적으로 opacity를 조정하는 로직을 구현해 사용자 경험을
            개선했습니다. 또한, 모든 뉴스 아이템을 한 번에 렌더링하여 발생하는
            성능 저하 문제를 해결하기 위해 현재 보고 있는 아이템 주변의 일정
            범위만 렌더링하는 방식으로 최적화 작업을 진행했습니다.&nbsp;
            <InternalLink href="/detail/RGNews/detail_1">
              [상세 코드]
            </InternalLink>
          </li>
          <li>
            검색창, 맞춤 검색어, 트렌딩 이슈, 연관 검색어, 검색 결과를 제공하는
            종합 검색 페이지를 구현했습니다. 검색 성능 최적화를 위해 사용자의
            검색 상태를 추적하여 렌더링과 불필요한 서버 호출을 최적화하는 작업을
            진행했습니다.&nbsp;
            <InternalLink href="/detail/RGNews/detail_2">
              [상세 코드]
            </InternalLink>
          </li>
          <li>
            뉴스 검색을 위한 API 연동과 Intersection Observer를 활용한 무한
            스크롤 기능을 구현했습니다. 한 번에 수백 개의 뉴스를 모두 가져오는
            대신, 10개씩 데이터를 페이징하여 불러오도록 하여 사용자 경험을
            개선하고 성능을 최적화했습니다.&nbsp;
            <InternalLink href="/detail/RGNews/detail_3">
              [상세 코드]
            </InternalLink>
          </li>
          <li>
            react-beautiful-dnd 라이브러리를 활용하여 사용자가 폴더 순서를
            직관적으로 변경할 수 있는 기능을 구현했습니다. 드래그 앤 드롭
            방식으로 폴더의 위치를 손쉽게 조정할 수 있어, 사용자에게 직관적이고
            편리한 인터페이스 경험을 제공했습니다.&nbsp;
            <InternalLink href="/detail/RGNews/detail_4">
              [예시 화면]
            </InternalLink>
          </li>
          <li>
            사용자가 기사를 음성으로 들을 수 있도록 텍스트 콘텐츠를 음성으로
            변환하여 재생하는 TTS(Text-to-Speech) 기능을 개발했습니다. 서버에
            의존하지 않고 브라우저 내에서 직접 오디오 처리 및 재생을 위해 Web
            Audio API를 활용하여 구현했습니다. 이를 통해 텍스트 콘텐츠를
            음성으로 변환하는 기능을 보다 빠르고 효율적으로 처리할 수 있었으며,
            해당 기능을 위한 React 커스텀 훅을 개발해 재사용성을
            높였습니다.&nbsp;
            <InternalLink href="/detail/RGNews/detail_5">
              [상세 코드]
            </InternalLink>
          </li>
        </ul>
      </Description>
    </ProjectContainer>
  );
};

export default RGNews;
