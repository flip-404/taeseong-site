import React from "react";
import styled from "@emotion/styled";

export const CustomTable = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

export const RowWrapper = styled.div`
  padding: 12px 0;
  display: flex;
  flex: 7;
  gap: 8px;
  font-size: 1rem;
  border-top: 1px solid #ddd;
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`;

export const T_Key = styled.div`
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

  a {
    color: #0000ee;
  }
`;

export const T_Value = ({ children }: { children: React.ReactNode }) => {
  return <Value>{children}</Value>;
};
