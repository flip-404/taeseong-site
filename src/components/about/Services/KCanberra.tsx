import { CompanySection, CompanyTitle } from '../../../styles/common';
import { CustomTable, RowWrapper, T_Key, T_Value } from '../../molecules/Table';
import KCanberraLogo from '../../../images/kcanberra_logo.png';


const KCanberra = () => {
  return (
    <CompanySection>
      <CompanyTitle>
        <img src={KCanberraLogo} alt="Company logo" />
        K-캔버라
      </CompanyTitle>
      호주 캔버라에 거주하는 한인들을 위한 유일한 한인 커뮤니티 웹사이트 
      <CustomTable>
        <RowWrapper>
          <T_Key>Role</T_Key>
          <T_Value>Fullstack Developer (단독 개발)</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Period</T_Key>
          <T_Value>2025.01 ~ 현재</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Stack</T_Key>
          <T_Value>
            Next, React, TanStack Query, Zustand, Typescript, Prisma, Supabase, Tailwindcss
          </T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Link</T_Key>
          <T_Value>
            <a href="https://www.kcanberra.com/" target="_blank" rel="noopener noreferrer">
              www.kcanberra.com
            </a>
          </T_Value>
        </RowWrapper>
      </CustomTable>
    </CompanySection>
  );
};

export default KCanberra;
