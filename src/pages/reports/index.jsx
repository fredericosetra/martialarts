import React from "react";

async function buscarPokemons() {
  const { response } = await fetch("https://swapi.dev/api/films/1/");
  // waits until the request completes...
  console.log(response);
}

const ReportStudentActive = () => {
  buscarPokemons();

  return (
    <>
      <h1>olá sou um estudante</h1>
      <h1>olá sou um estudante</h1>
    </>
  );
};

export default ReportStudentActive;
