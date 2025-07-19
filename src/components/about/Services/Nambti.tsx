import { CompanySection, CompanyTitle } from '../../../styles/common';
import { CustomTable, RowWrapper, T_Key, T_Value } from '../../molecules/Table';
import KCanberraLogo from '../../../images/kcanberra_logo.png';


const Nambti = () => {
  return (
    <CompanySection>
      <CompanyTitle>
        <img src={KCanberraLogo} alt="Company logo" />
        남비티아이
      </CompanyTitle>
      친구들이 생각하는 내 MBTI는 과연 무엇일까? 추측을 통해 알아보는 서비스
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
            Next, React, Zustand, Typescript, Prisma, Supabase, Tailwindcss
          </T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Link</T_Key>
          <T_Value>
            <a href="https://nambti.site/" target="_blank" rel="noopener noreferrer">
              www.nambti.site (배포전)
            </a>
          </T_Value>
        </RowWrapper>
      </CustomTable>
    </CompanySection>
  );
};

export default Nambti;
