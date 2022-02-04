import React from "react";
import CollapseButton from "../SwitchButton";
import * as S from "./styled";

const TopBar = () => {
  return (
    <>
      <S.TopBarContainer>
        <CollapseButton />
      </S.TopBarContainer>
    </>
  );
};

export default TopBar;
