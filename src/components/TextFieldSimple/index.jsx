import React from "react";
import * as S from "./styled";

export default function TextFieldSimple({
  placeholder,
  widthField = "250px",
  heightField = "20px",
  background,
  outline,
  inputValue,
  setInputValue,
}) {
  function handleChange(e) {
    setInputValue({ ...inputValue, [placeholder]: e.target.value });
  }

  return (
    <S.InputSimple
      type="text"
      placeholder={placeholder}
      widthField={widthField}
      heightField={heightField}
      background={background}
      outline={outline}
      onChange={handleChange}
      value={inputValue[placeholder]}
    />
  );
}
