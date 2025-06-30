import styled from "@emotion/styled";
import { CustomTable, RowWrapper, T_Key, T_Value } from "../molecules/Table";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    padding: 0 24px;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;

  span {
    font-size: 1.5rem;
  }
`;

const Label = styled.h2`
  margin: 0;
`;

const BasicInformation = () => {
  return (
    <Container>
      <Name>
        김태성 <span>(Taeseong Kim)</span>
      </Name>
      <Label>기본정보</Label>
      <CustomTable>
        <RowWrapper>
          <T_Key>이름</T_Key>
          <T_Value>김태성</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>생년월일</T_Key>
          <T_Value>1997.11.19</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>이메일</T_Key>
          <T_Value>aka404365@gmail.com</T_Value>
        </RowWrapper>
        <RowWrapper>
          <T_Key>경력사항</T_Key>
          <T_Value>
            3년차 프론트엔드 개발자 <span>(현 CHEXCAR 재직)</span>
          </T_Value>
        </RowWrapper>
      </CustomTable>
    </Container>
  );
};

export default BasicInformation;
