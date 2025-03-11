import styled from "@emotion/styled";
import { Link } from "gatsby";
import { CompanySection, CompanyTitle } from "../../../styles/common";
import { CustomTable, RowWrapper, T_Key, T_Value } from "../../molecules/Table";

const CHEXCAR = () => {
  return (
    <CompanySection>
      <CompanyTitle>CHEXCAR</CompanyTitle>
      국내 최초 중고차 원스톱 상품화 플랫폼, 체카
      <CustomTable>
        <RowWrapper>
          <T_Key>Company</T_Key>
          <T_Value>
            <a
              href="https://www.chexcar.co.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              CHEXCAR
            </a>
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
      <a
        href="https://www.newsis.com/view/NISX20240911_0002884091"
        target="_blank"
        rel="noopener noreferrer"
      >
        화성 PDI 센터
      </a>
      의 웹/웹앱 서비스 개발을 담당했습니다. 의 웹/웹앱 서비스 개발을
      담당했습니다. 의 웹/웹앱 서비스 개발을 담당했습니다. 의 웹/웹앱 서비스
      개발을 담당했습니다. 의 웹/웹앱 서비스 개발을 담당했습니다. 의 웹/웹앱
      서비스 개발을 담당했습니다.
    </CompanySection>
  );
};

export default CHEXCAR;
