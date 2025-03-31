//validação do usuario

import { User } from "../types/User";

type Error = {
  [key: string]: string;
};

export const Validate = (data: User) => {
  const errors: Error = {};
  //if de validação se  o usuario  inseriu os campos obrigatorios
  if (!data.name) {
    errors["name"] = "O nome é obrigatorio";
  }
  if (!data.email) {
    errors["email"] = "O email é obrigatorio";
  }

  if (!data.cpf) {
    errors["cpf"] = "o cpf é obrigatorio";
  }

  
  if (!data.senha) {
    errors["senha"] = "a senha é obrigatorio";
  }
  return errors;
};
