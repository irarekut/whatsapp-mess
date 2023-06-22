import styled from "styled-components";

export const container = styled.div``;

export const input = styled.input`
  background-color: transparent;
  border: 1px solid #009805;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  width: 355px;
  height: 32px;
  &::placeholder {
    padding-left: 10px;
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    color: #609d68;
  }
`;
