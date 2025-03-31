import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { Validate } from "../utils/Validation";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const [erros, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: User = {
      name,
      email,
      cpf,
      senha,
    };

    // variavel para validar os campos  que o usuario tem que preencher
    const validateErrors = Validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }
    setName("");
    setEmail("");
    setCpf("");
    setSenha("");

    alert("entrou no sistema!!");
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className=" flex flex-col">
        <label className="text-sm" htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          className="rounded-ig py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {erros?.name && (
          <small className="text-xs text-red-500 mt-1">{erros?.name}</small>
        )}
      </div>
      <div className=" flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          placeholder="digite o seu melhor e-mail"
          className="rounded-ig py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {erros?.email && (
          <small className="text-xs text-red-500 mt-1">{erros?.email}</small>
        )}
       <label className="text-sm" htmlFor="cpf">
          CPF
        </label>
        <input
          type="text"
          placeholder="Digite o seu cpf"
          className="rounded-ig py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        {erros?.cpf && (
          <small className="text-xs text-red-500 mt-1">{erros?.cpf}</small>
        )}  

      <label className="text-sm" htmlFor="senha">
          senha
        </label>
        <input
          type="text"
          placeholder="Digite a sua senha"
          className="rounded-ig py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erros?.senha && (
          <small className="text-xs text-red-500 mt-1">{erros?.senha}</small>
        )}

      </div>

      
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
       Logar
      </button>
    </form>
  );
};

export default Form;
