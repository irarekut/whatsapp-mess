import * as S from "./styled";
import Input from "../../components/loginInput/loginInput";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { setWid, setId, setToken } from "../../store/loginDataSlice";
import { useNavigate } from "react-router-dom";
import { SetSettings } from "../../api/api";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idInstance, setIdIdInstance] = useState("");
  const [token, setApiToken] = useState("");
  const [error, setError] = useState(false);

  const onChangeId = (val) => {
    setIdIdInstance(val.target.value);
  };
  const onChangeToken = (val) => {
    setApiToken(val.target.value);
  };

  const HandleClick = async () => {
    if (idInstance !== "" && token !== "") {
      const data = await SetSettings(idInstance, token);
      dispatch(setId(idInstance));
      dispatch(setToken(token));
      dispatch(setWid(data.wid));
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <S.container>
      <S.form>
        <Input placeholder="idInstance" onChange={(val) => onChangeId(val)} />
        <Input placeholder="ApiToken" onChange={(val) => onChangeToken(val)} />
        <S.button onClick={HandleClick}>Войти</S.button>
        {error === true ? <S.error>Поля должны быть заполнены</S.error> : null}
      </S.form>
    </S.container>
  );
}
