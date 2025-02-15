import styled from "@emotion/styled";
import { Link } from "gatsby";
import { SectionTitle } from "../../styles/common";
import { CustomTable, RowWrapper, T_Key, T_Value } from "../molecules/Table";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.h2`
  margin: 16px 0px;
`;

const OneLineIntroduction = styled.h3`
  font-size: 17px;
  margin: 16px 0;
  span {
    padding: 4px;
    border-radius: 4px;
    font-weight: bold;
    background-color: #94ea75;
    color: white;
  }
`;

const BlankList = styled.ul`
  margin: 0 0 16px;
  li {
    margin: 8px 0;
  }
`;

const Introduction = () => {
  return (
    <Container>
      <Label>안녕하세요, 3년차 프론트엔드 개발자 김태성 입니다.</Label>
      <OneLineIntroduction>
        저는 <span>_ _ _ _ _ _</span> 하는 개발자 입니다.
      </OneLineIntroduction>
      <BlankList>
        <li>사용자의 입장에서 제품을 개발하는</li>
        <li>문제를 끝까지 파고들어 해결하는</li>
        <li>개발 지식을 문서화하고 공유하는 것을 좋아하는</li>
      </BlankList>
      <CustomTable>
        <RowWrapper>
          <T_Key>Github</T_Key>
          <T_Value>
            <Link
              to="https://github.com/flip-404"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/flip-404
            </Link>
          </T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Blog</T_Key>
          <T_Value>
            <Link
              to="https://taeseong-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              taeseong-site.vercel.app
            </Link>
          </T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Email</T_Key>
          <T_Value>
            <Link to="mailto:aka404365@gmail.com">aka404365@gmail.com</Link>
          </T_Value>
        </RowWrapper>
      </CustomTable>
      <SectionTitle>Experience.</SectionTitle>
      3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드 개발자
      김태성입니다. 3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드
      개발자 김태성입니다. 3년차 프론트엔드 개발자 김태성입니다. 3년차
      프론트엔드 개발자 김태성입니다. 3년차 프론트엔드 개발자 김태성입니다.
      3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드 개발자
      김태성입니다. 3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드
      개발자 김태성입니다. <br />
      <br />
      3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드 개발자
      김태성입니다. 3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드
      개발자 김태성입니다. 3년차 프론트엔드 개발자 김태성입니다. 3년차
      프론트엔드 개발자 김태성입니다. 3년차 프론트엔드 개발자 김태성입니다.
      3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드 개발자
      김태성입니다. 3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드
      개발자 김태성입니다.
      <br />
      <br />
      3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드 개발자
      김태성입니다. 3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드
      개발자 김태성입니다. 3년차 프론트엔드 개발자 김태성입니다. 3년차
      프론트엔드 개발자 김태성입니다. 3년차 프론트엔드 개발자 김태성입니다.
      3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드 개발자
      김태성입니다. 3년차 프론트엔드 개발자 김태성입니다. 3년차 프론트엔드
      개발자 김태성입니다.
    </Container>
  );
};

export default Introduction;
