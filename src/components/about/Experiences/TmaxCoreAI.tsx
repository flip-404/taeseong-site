import { CompanySection, CompanyTitle } from '../../../styles/common';
import { CustomTable, RowWrapper, T_Key, T_Value } from '../../molecules/Table';
import KGM_Project from './Projects/TmaxAI_KGM_chatbot';
import Catholic from './Projects/TmaxAI_Catholic';
import TmaxAIHomePage from './Projects/TmaxAI_HomePage';
import RGNews from './Projects/TmaxAI_RGNews';
import TmaxLogo from '../../../images/tmaxai_logo.jpeg';
import HyperChatbot from './Projects/TmaxAI_HyperChatbot';

const TmaxCoreAI = () => {
  return (
    <CompanySection>
      <CompanyTitle>
        <img src={TmaxLogo} alt="Company logo" />
        TmaxCoreAI
      </CompanyTitle>
      티맥스 그룹의 AI 서비스 전문 기업
      <CustomTable>
        <RowWrapper>
          <T_Key>Company</T_Key>
          <T_Value>
            <a href="https://www.tmax.co.kr/tmaxai" target="_blank" rel="noopener noreferrer">
              Tmax AI
            </a>
          </T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Position</T_Key>
          <T_Value>Frontend Web (서비스 개발팀)</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Period</T_Key>
          <T_Value>2023.01 ~ 2024.12</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>Stack</T_Key>
          <T_Value>React, TanStack Query, useSWR, Recoil, Typescript, Styled-Components</T_Value>
        </RowWrapper>
      </CustomTable>
      <Catholic />
      <KGM_Project />
      <TmaxAIHomePage />
      <RGNews />
      <HyperChatbot />
    </CompanySection>
  );
};

export default TmaxCoreAI;
