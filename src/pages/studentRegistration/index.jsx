import React, { useState } from "react";
import TextFieldSimple from "../../components/TextFieldSimple";
import * as S from "./styled";

const StudentRegistration = () => {
  const [inputValue, setInputValue] = useState({});

  return (
    <>
      <S.title>Cadastro de alunos</S.title>

      <TextFieldSimple
        placeholder="Nome Completo"
        heightField="20px"
        widthField="250px"
        outline="grey"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <TextFieldSimple
        placeholder="E-mail"
        heightField="20px"
        widthField="250px"
        outline="grey"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      {/* fazer um dropdown */}
      <TextFieldSimple
        placeholder="Iniciou na faixa"
        heightField="20px"
        widthField="250px"
        outline="grey"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      {/* fazer um dropdown colocar tambem um item perguntando se o alunoe  colorida ou preta para fazer um seletor de quais dados vao aparecer.*/}
      <TextFieldSimple
        placeholder="Faixa Atual"
        heightField="20px"
        widthField="250px"
        outline="grey"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <TextFieldSimple
        placeholder="idade"
        heightField="20px"
        widthField="250px"
        outline="grey"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <TextFieldSimple
        placeholder="Endereço"
        heightField="20px"
        widthField="250px"
        outline="grey"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <TextFieldSimple
        placeholder="RG"
        heightField="20px"
        widthField="250px"
        outline="grey"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <TextFieldSimple
        placeholder="CPF"
        heightField="20px"
        widthField="250px"
        outline="grey"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
};

export default StudentRegistration;
