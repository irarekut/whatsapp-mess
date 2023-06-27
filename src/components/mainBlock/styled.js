import styled from "styled-components";

export const container = styled.div`
  width: 150vh;
  height: 100vh;
  background-color: #f7efdc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const telBlock = styled.div`
  width: 150hv;
  height: 60px;
  display: flex;
  padding-left: 15px;
  background-color: rgb(76, 174, 79);
  align-items: center;
`;

export const telTitle = styled.h2``;

export const blockMessages = styled.div`
  display: flex;
  padding-left: 20p;
  flex-direction: column;
  align-items: center;
`;

export const mainBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const blockMessage = styled.div`
  display: flex;
  width: 95%;
  justify-content: flex-start;
  &.send {
    justify-content: flex-end;
  }
`;
export const message = styled.div`
  text-align: right;
  width: fit-content;
  max-width: 400px;
  color: #fff;
  min-height: 40px;
  padding: 5px;
  font-weight: 400;
  font-size: 23px;
  outline: none;
  line-height: 24px;
  border: 1px solid #d1d7db;
  border-radius: 5px;
  padding: 8px;
  background-color: #4cae4f;
  &.send {
    background-color: #b3bdc4;
  }
`;

export const wrapper = styled.div`
  margin-top: 20px;
`;

export const blockInput = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
`;

export const inputMessage = styled.input`
  width: 80%;
  height: 40px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 23px;
  outline: none;
  line-height: 24px;
  border: 1px solid rgb(234, 230, 223);
  border-radius: 5px;
  background: rgb(234, 230, 223);
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #e1e1e1;
  }
`;

export const button = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 400;
  font-size: 23px;
  outline: none;
  line-height: 24px;
  border: 0px;
  border-radius: 5px;
  background-color: #4cae4f;
  color: #fff;
  &:hover {
    background-color: #009805;
  }
  &:active {
    background-color: #006603;
  }
`;
export const error = styled.div`
  padding-left: 40px;
  color: red;
`;
