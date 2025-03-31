import "./App.css";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
        <h1 className="font-bold-text-[2rem] text-white">Inscreva-se</h1>
        <p className="text-white">
          Bem vindo ao login do Sistema 
        </p>
        <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-ig">
          <Form />
        </div>
        <p className=" text-size-100 text-xs w-96 et-2 text-center text-white ">
          Ao Logar seu dados estarão salvos no  nosso sistema 
        </p>
      </div>
    </>
  );
}

export default App;
