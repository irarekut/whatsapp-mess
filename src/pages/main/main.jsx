import { React } from "react";
import * as S from "./styled";
import MainBlock from "../../components/mainBlock/mainBlock";
import SideBar from "../../components/SideBar/sideBar";

export default function Main() {
  return (
    <S.container>
      <SideBar />
      <MainBlock />
    </S.container>
  );
}
