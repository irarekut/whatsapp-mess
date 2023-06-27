import { React, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";
import { setTel } from "../../store/telSlise";

export default function SideBar() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();
  const tel = useSelector((state) => state.tel);

  const OnValueChange = (val) => {
    setValue(val.target.value);
  };

  const HandleClick = () => {
    dispatch(setTel(value));
    ref.current.value = "";
  };

  return (
    <S.container>
      <S.inputNumber
        placeholder="Введите номер"
        type="tel"
        pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}[0-9]{4}"
        required
        onChange={(val) => OnValueChange(val)}
        ref={ref}
      />
      <S.button onClick={HandleClick} type="submit">
        Написать
      </S.button>
      {tel.tel !== "" ? <S.telBlock>{tel.tel}</S.telBlock> : null}
    </S.container>
  );
}
