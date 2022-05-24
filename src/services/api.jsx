import axios from "axios";

export const HpPersonagens = () => {
  const resultado = axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      console.log(response.data.title);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return resultado;
};
