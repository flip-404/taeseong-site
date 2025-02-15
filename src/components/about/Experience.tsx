import styled from "@emotion/styled";
import { SectionTitle } from "../../styles/common";
import { CustomTable, RowWrapper, T_Key, T_Value } from "../molecules/Table";
import { Link } from "gatsby";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Experience = () => {
  return (
    <Container>
      <SectionTitle>Experience.</SectionTitle>
      국내 최초 중고차 상품화 플랫폼 CHEXCAR
      <CustomTable>
        <RowWrapper>
          <T_Key>Company</T_Key>
          <T_Value>
            <Link
              to="https://www.chexcar.co.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              CHEXCAR
            </Link>
          </T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Position</T_Key>
          <T_Value>MOS Development Team (Frontend Web)</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Period</T_Key>
          <T_Value>2025.01 ~ 현재</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Stack</T_Key>
          <T_Value>
            React, TanStack Query, Jotai, Typescript, ShadCN, Tailwindcss,
            Storybook
          </T_Value>
        </RowWrapper>
      </CustomTable>
      올해 10월 준공 예정인
      <Link
        to="https://www.newsis.com/view/NISX20240911_0002884091"
        target="_blank"
        rel="noopener noreferrer"
      >
        화성 PDI 센터
      </Link>
      의 웹/웹앱 서비스 개발을 담당했습니다. 프론트엔드 개발자로서 5개의 초기
      스타트업 웹/웹앱 서비스 개발했습니다. 제품 초기 세팅부터 기능 개발,
      리팩토링, 퍼블리싱, 유지보수를 맡았습니다. 고객사와 실시간으로 소통하며
      애자일한 프로세스를 경험할 수 있었습니다. React, Next.js, Typescript,
      Recoil, React-Query, Tailwind, AWS (S3, EC2, Amplify, RDS, Cognito)를
      이용해 개발했습니다.
      <CustomTable>
        <RowWrapper>
          <T_Key>Company</T_Key>
          <T_Value>
            <Link
              to="https://www.tmax.co.kr/tmaxai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tmax AI
            </Link>
          </T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Position</T_Key>
          <T_Value>Service Development Team (Frontend Web)</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Period</T_Key>
          <T_Value>2023.01 ~ 2024.12</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Stack</T_Key>
          <T_Value>
            React, TanStack Query, Jotai, Typescript, ShadCN, Tailwindcss,
            Storybook
          </T_Value>
        </RowWrapper>
      </CustomTable>
    </Container>
  );
};

export default Experience;
