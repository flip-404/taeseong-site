import styled from "@emotion/styled";
import { Link } from "gatsby";

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
  margin: 16px 0;
  li {
    margin: 8px 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 12px 0;
  display: flex;
  flex: 7;
  gap: 8px;
  font-size: 1rem;
  border-top: 1px solid #ddd;
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`;

const Key = styled.div`
  flex: 1;
  padding: 4px 8px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Value = styled.div`
  flex: 6;
  padding: 4px 8px;
  display: flex;
  align-items: center;

  span {
    font-size: 0.8rem;
    margin-left: 8px;
  }

  a {
    color: #0000ee;
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
      <Content>
        <Wrapper>
          <Key>Github</Key>
          <Value>
            <Link
              to="https://github.com/flip-404"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/flip-404
            </Link>
          </Value>
        </Wrapper>
        <Wrapper>
          <Key>Blog</Key>
          <Value>
            <Link
              to="https://taeseong-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              taeseong-site.vercel.app
            </Link>
          </Value>
        </Wrapper>
        <Wrapper>
          <Key>Email</Key>
          <Value>
            <Link to="mailto:aka404365@gmail.com">aka404365@gmail.com</Link>
          </Value>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Introduction;
