import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: rgb(235 231 231);
`;

export const form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const button = styled.button`
  width: 278px;
  height: 52px;
  background-color: rgb(96, 157, 104);
  border-radius: 6px;
  border: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  outline: none;
  color: #ffffff;
`;

export const error = styled.div`
  color: red;
`;
