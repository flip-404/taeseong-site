import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

const Name = styled.h1`
  font-size: 2.5rem;

  span {
    font-size: 1.5rem;
  }
`;

const Label = styled.h2`
  margin: 32px 0px;
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
    border-bottom: 1px solid #ddd; // 마지막 wrapper에 아래 border 추가
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
`;

const BasicInformation = () => {
  return (
    <Container>
      <Name>
        김태성 <span>(Taeseong Kim)</span>
      </Name>
      <Label>기본정보</Label>
      <Content>
        <Wrapper>
          <Key>이름</Key>
          <Value>김태성</Value>
        </Wrapper>
        <Wrapper>
          <Key>생년월일</Key>
          <Value>1997.11.19</Value>
        </Wrapper>
        <Wrapper>
          <Key>이메일</Key>
          <Value>aka404365@gmail.com</Value>
        </Wrapper>
        <Wrapper>
          <Key>경력사항</Key>
          <Value>
            4년차 프론트엔드 개발자 <span>(현 CHEXCAR 재직)</span>
          </Value>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default BasicInformation;
