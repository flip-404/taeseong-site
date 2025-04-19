import styled from "@emotion/styled";
import { Link } from "gatsby";
import { SectionTitle } from "../../styles/common";
import { CustomTable, RowWrapper, T_Key, T_Value } from "../molecules/Table";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const Label = styled.h2`
  margin: 16px 0px;

  span {
    text-decoration: underline;
    text-decoration-color: #bdeaad;
    text-decoration-line: underline;
    text-decoration-skip-ink: none;
    text-decoration-thickness: 10.2px;
    text-underline-offset: -4.08px;
  }
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

const IntroductionDescription = styled.div`
  line-height: 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
  }

  h5 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
  }

  ul {
    margin: 0 0 0 24px;
    padding: 12px 0;
  }
`;

const Introduction = () => {
  return (
    <Container>
      <Label>
        안녕하세요, <span>3년차 프론트엔드 개발자 김태성</span> 입니다.
      </Label>
      <OneLineIntroduction>
        저는 <span>_ _ _ _ _ _</span> 하는 개발자 입니다.
      </OneLineIntroduction>
      <BlankList>
        <li>더 좋은 결과를 위해 끝까지 파고드는</li>
        <li>빠르고 직관적인 서비스를 고민하는</li>
        <li>직관보다 근거를 바탕으로 판단하는</li>
      </BlankList>
      <CustomTable>
        <RowWrapper>
          <T_Key>Github</T_Key>
          <T_Value>
            <a
              href="https://github.com/flip-404"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/flip-404
            </a>
          </T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Blog</T_Key>
          <T_Value>
            <a
              href="https://taeseong-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              taeseong-site.vercel.app
            </a>
          </T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Email</T_Key>
          <T_Value>
            <a href="mailto:aka404365@gmail.com">aka404365@gmail.com</a>
          </T_Value>
        </RowWrapper>
      </CustomTable>
      <SectionTitle>Introduction.</SectionTitle>
      <IntroductionDescription>
        <div>
          <h5>옆자리 동료와 함께 성장하기 위해 코딩합니다.</h5>
          <ul>
            <li>
              <strong>옆자리 동료가 편안하게 읽을 수 있는 코드</strong>를
              작성하기 위해 꾸준히 학습하고 소통합니다.
            </li>
            <li>
              더 나은 방향을 함께 고민하는 과정을 소중히 여기며,
              <strong>팀 전체의 시너지를 높이는 개발</strong>을 지향합니다.
            </li>
            <li>
              개발자라는 직무를 넘어,{" "}
              <strong>믿을 수 있는 동료이자 팀원</strong>이 되기 위해
              노력합니다.
            </li>
          </ul>
        </div>
        <div>
          <h5>만드는 제품에 진심을 담습니다.</h5>
          <ul>
            <li>
              제품은 <strong>저와 팀의 가치를 증명하는 결과물</strong>입니다.
              직접 만든 서비스에 책임감을 갖고, 더 나은 결과를 위해 끝까지
              파고드는 성향을 가지고 있습니다.
            </li>
            <li>
              프로젝트의 요구사항에 맞춰 <strong>최적의 기술 스택</strong>을
              선택하며, 새로운 기술을 학습하는 것을 두려워하지 않습니다.
            </li>
            <li>
              <strong>성능 최적화에 깊은 관심</strong>을 가지고 있으며, 이를
              위해 다양한 접근법을 실험하고 개선해 나갑니다.
            </li>
          </ul>
        </div>
      </IntroductionDescription>
    </Container>
  );
};

export default Introduction;
