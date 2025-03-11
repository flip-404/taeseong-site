import styled from "@emotion/styled";
import { Link } from "gatsby";

const Label = styled.h4`
  margin: 0;
  font-size: 1.5rem;
`;

const Detail = styled.p`
  margin: 8px 0;
  color: #949494;
`;

const Description = styled.div`
  margin-bottom: 50px;

  li {
    margin-bottom: 10px;
  }
`;

const CustomLink = styled.span`
  color: #0000ee;
  text-decoration: underline;
  cursor: pointer;
`;

const KGM_Project = () => {
  const openInNewWindow = (url: string) => {
    window.open(url, "_blank", "width=400,height=649");
  };

  return (
    <>
      <Label>KGM 챗봇</Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2022.09 - 2023.01</Detail>
      <Description>
        <a
          href="https://www.kg-mobility.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KGM 공식 홈페이지&nbsp;
        </a>
        내에서 고객이 원하는 정보를 쉽게 찾을 수 있도록 도와주는&nbsp;
        <CustomLink
          onClick={() => openInNewWindow("https://kgchat.kg-mobility.com/")}
        >
          챗봇 서비스
        </CustomLink>
        를 개발하였습니다. 2명의 FE 개발자와 2명의 개발자, 백엔드 개발자,
        디자이너, PO와 함 팀을 이뤄 애자일 프로세스로 작업을 진행했습니다.
        <br />
        <br />
        React, Typescript, Recoil, Styled-Components를 이용해 개발했습니다.
      </Description>
      <Description>
        <Label>What I did.</Label>
        <ul>
          <li>
            인앱약정 프로세스 중 잦은 API를 호출하던 방식에서, Redux를 사용하여
            상태값을 관리하고 최소한의 API 호출을 할 수 있도록 설계를
            개선했습니다. 15회이상 여러번 호출되던 API 횟수를 줄여 불필요한 서버
            요청을 5단계로 줄일 수 있었고, 프론트에서 Redux의 상태값을 바로
            가져올 수 있도록 수정해 페이지 전환 속도를 개선하였습니다. [상세
            코드]
          </li>
          <li>
            기존에 앱과 웹 사이의 페이지 이동이 부자연스럽다는 피드백이 있어,
            웹을 옆으로 넘길 때 앱처럼 작동할 수 있는 transition을 적용했습니다.
            react-spring을 이용하여 웹에서도 앱처럼 자연스러운 모션으로 이동할
            수 있도록 사용성을 개선하였습니다. [상세 코드]
          </li>
          <li>
            {" "}
            주소 검색을 위한 API 연동 및 Intersection Observer를 이용한 무한
            스크롤 도입을 작업했습니다. 한번에 수백가지의 주소를 모두 가져오지
            않고, 20개씩 끊어서 데이터를 가져올 수 있게 하여 사용자 경험을
            개선하고 성능을 최적화했습니다. 3주 단위 스프린트(2주 기능개발, 1주
            QA)로 애자일 개발 프로세스를 경험했습니다. 매 스프린트 마다 적극적인
            피드백을 주어 제품을 개선하였고, 구글 스프레드 시트에 자체 QA 사항을
            체크하며 업무 상황을 공유하였습니다. 탁월한 제품 개발과 함께 성장할
            수 있는 개발 문화를 만들 수 있도록 노력했습니다.
          </li>
        </ul>
      </Description>
    </>
  );
};

export default KGM_Project;
