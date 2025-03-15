import styled from "@emotion/styled";
import { Link } from "gatsby";
import { SectionTitle } from "../../styles/common";
import { CustomTable, RowWrapper, T_Key, T_Value } from "../molecules/Table";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
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
        3년 차 프론트엔드 개발자 김태성입니다. 더 나은 결과를 만들기 위해 끝까지
        파고드는 성향을 가지고 있으며, 사내 스터디와 블로그를 통해 꾸준히
        학습하고 성장하고 있습니다. 또한, 적극적인 코드 리뷰와 동료들과의 협업을
        즐기며 함께 발전하는 것을 중요하게 생각합니다. 토이 프로젝트를 통해
        다양한 기술을 활용해 아이디어를 실현하는 과정에 큰 흥미를 느끼며, 새로운
        기술을 탐색하고 도입하는 것을 좋아합니다. <br />
        <br />
        티맥스에이아이에서 2년간 약 5개의 프로젝트를 수행하며 문제를 신속하게
        해결하는 역량을 키웠고, 협업과 애자일 프로세스를 경험했습니다. AI
        도메인에 대한 깊은 이해를 바탕으로, AI 서비스 개발을 위한 효율적인
        프론트엔드 아키텍처를 설계하고 최적화하는 작업을 수행했습니다. 또한,
        디자인과 개발의 일관성을 유지하기 위해 체계적인 컴포넌트 관리 및 성능
        최적화를 경험하며 더욱 전문적인 프론트엔드 개발자로 성장했습니다. <br />
        <br />
        현재 CHEXCAR에서 원스톱 중고차 상품화 플랫폼 앱 개발을 담당하고
        있습니다. 팀에 중간 합류하여, 기존에 렌더링 시마다 발생하던 API 요청을
        TanStack Query를 활용한 캐싱 로직으로 리팩토링하여 API 호출 횟수와
        불필요한 리렌더링을 대폭 줄였습니다. 또한, 회사의 기존 홈페이지를 기획자
        및 디자이너와 협업하여 기획부터 디자인, 개발까지 전반적인 설계를
        주도하며 구축하고 있으며, CI/CD 설정도 진행하였습니다.
      </IntroductionDescription>
    </Container>
  );
};

export default Introduction;
