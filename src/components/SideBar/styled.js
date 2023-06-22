import styled from "styled-components";

export const container = styled.div`
  display: flex;
  gap: 15px;
  height: 100vh;
  width: 244px;
  background-color: rgb(234, 230, 223);
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
`;

export const inputNumber = styled.input`
  width: 200px;
  height: 35px;
  background-color: transparent;
  padding-left: 10px;
  font-weight: 400;
  font-size: 16px;
  outline: none;
  line-height: 18px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
  }
`;

export const telBlock = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #4cae4f;
  text-decoration: underline;
`;

export const button = styled.button`
  width: 200px;
  height: 40px;
  font-weight: 400;
  font-size: 23px;
  outline: none;
  line-height: 24px;
  border: 0px;
  border-radius: 10px;
  background-color: rgb(76, 174, 79);
  color: rgb(255, 255, 255);
  &:hover {
    background-color: #009805;
  }
  &:active {
    background-color: #006603;
  }
`;
