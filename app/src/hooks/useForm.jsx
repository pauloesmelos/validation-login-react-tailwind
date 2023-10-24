import React from "react";
const types = {
    name: {
        regexp: /^[a-zA-Z]{5,}$/,
        error: "* Preencha um nome válido"
    },
    email: {
        regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        error: "* Preencha um e-mail válido (email@domínio)!"
    },
    password: {
        regexp: /^.{6,}.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,./\\-]$/,
        error: "* Senha fraca, use no mínimo 6 dígitos e um caracter especial (!,?,@,#,$,%,&,*) "
    }
}
const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [erro, setErro] = React.useState(null);
  
  function testValue(text) {
    if(text.length === 0) {
        setErro('Preencha o campo!');
    }
    else if(!types[type].regexp.test(text)) {
        setErro(types[type].error);
    }
    else {
        setErro(null);
    }
  }
  const onBlur = ({target}) => {
    testValue(target.value);
  }
  const onChange = ({target}) => {
    if(erro) {
        testValue(target.value);
    }
    setValue(target.value);
  }
  return { value, erro, setErro, onChange, onBlur }
}

export default useForm;