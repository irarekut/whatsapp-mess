import { React } from "react";
import * as S from "./styled";
import CenterBlock from "../../components/centerBlock/centerBlock";
import SideBar from "../../components/SideBar/sideBar";

export default function Main() {
  return (
    <S.container>
      <SideBar />
      <CenterBlock />
    </S.container>
  );
}
