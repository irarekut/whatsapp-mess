/* eslint-disable react/prop-types */
import { React } from "react";
import * as S from "./styled";

export default function Input(props) {
  return (
    <S.input
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
