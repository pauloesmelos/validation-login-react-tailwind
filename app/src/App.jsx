import React from 'react';
import Button from './components/button/Button';
import Input from './components/form/Input';
import Techs from './components/imagem/Techs';
import User from './components/imagem/User';

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <>
      <main className="flex justify-center">
        <section className="h-screen w-full">
          <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center h-screen">
            <User 
              alt="Imagem usuário"
              title="Imagem de usuário para a tela de cadastro"
            />
            <Input
                type="name"
                name="name"
                id="name"
                label="Nome: "
                placeholder="Nome"
            />
            <Input
                type="email"
                name="email"
                id="email"
                label="E-mail: "
                placeholder="E-mail"
            />
            <Input
                type="password"
                name="password"
                id="password"
                label="Senha: "
                placeholder="********"
            />
            <Button text="Cadastrar-se" />
          </div>
        </form>
        </section>
        
        <section className="hidden md:block w-full h-screen bg-sky-600">
          <div className="flex flex-col justify-center items-center h-screen gap-10">
            <h1 className="text-2xl font-light text-white text-center max-w-sm">Domine as <span className="font-medium">tecnologias mais buscadas</span> pelo mercado!</h1>
            <Techs alt="Imagem tecnologia logo" title="Imagem tecnologia" />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;