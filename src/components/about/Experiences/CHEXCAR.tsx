import { CompanySection, CompanyTitle } from "../../../styles/common";
import { CustomTable, RowWrapper, T_Key, T_Value } from "../../molecules/Table";
import ChexcarLogo from "../../../images/chexcar_logo.png";
import CHEXCARHomePage from "./Projects/CHEXCAR_HomePage";
import CHEXCARNova from "./Projects/CHEXCAR_Nova";
import CHEXCARApp from "./Projects/CHEXCAR_APP";

const CHEXCAR = () => {
  return (
    <CompanySection>
      <CompanyTitle>
        <img src={ChexcarLogo} alt="Company logo" />
        CHEXCAR
      </CompanyTitle>
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
          <T_Value>Frontend Web (개발팀)</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Period</T_Key>
          <T_Value>2025.01 ~ 현재</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Stack</T_Key>
          <T_Value>
            Next, React, TanStack Query, Jotai, Typescript, ShadCN, Tailwindcss,
            Storybook
          </T_Value>
        </RowWrapper>
      </CustomTable>
      <CHEXCARNova />
      <CHEXCARHomePage />
      <CHEXCARApp />
    </CompanySection>
  );
};

export default CHEXCAR;
