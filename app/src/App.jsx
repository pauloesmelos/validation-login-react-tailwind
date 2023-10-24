import React from 'react';
import Button from './components/button/Button';
import Input from './components/form/Input';
import Techs from './components/imagem/Techs';
import User from './components/imagem/User';
import useForm from './hooks/useForm';

const App = () => {
  /* const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(''); */
  const validateName = useForm('name');
  const validaEmail = useForm('email');
  const validatePassword = useForm('password');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviado");
  }
  const handleChange = (event) => {

  }
  React.useEffect(() => {
    
  }, [validaEmail]);
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
                value={validateName.value}
                onChange={validateName.onChange}
                onBlur={validateName.onBlur}
                erro={validateName.erro}
            />
            <Input
                type="email"
                name="email"
                id="email"
                label="E-mail: "
                placeholder="E-mail"
                value={validaEmail.value}
                onChange={validaEmail.onChange}
                onBlur={validaEmail.onBlur}
                erro={validaEmail.erro}
            />
            <Input
                type="password"
                name="password"
                id="password"
                label="Senha: "
                placeholder="********"
                value={validatePassword.value}
                onChange={validatePassword.onChange}
                onBlur={validatePassword.onBlur}
                erro={validatePassword.erro}
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