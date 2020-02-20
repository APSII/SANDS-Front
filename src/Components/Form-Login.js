import React,{ useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import api from '../Service/api'

// import { Container } from './styles';

export default function FormLogin(props) {
  const [usuario,setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const handleUsuario = event =>{
    setUsuario(event.target.value)
  }
  const handleSenha = event =>{
    setSenha(event.target.value)
  }
  const handleSubmit = event =>{
    event.preventDefault()
    api.post('/authentication', {"strategy":"local","email":usuario, "password":senha})
      .then(res =>{
        const token = res.data.accessToken
        localStorage.setItem('auth_token',token)
        props.history.push('/unidade')
      }).catch(res =>{
        console.log(res)
      })
  }

  return (
    <form onSubmit={handleSubmit} >
        <TextField className="input-login" id="usuario" size="small" label="Usuário" variant="outlined" value={usuario} onChange={handleUsuario} />
        <TextField className="input-login" id="senha" size="small" type="password" label="Senha" variant="outlined" value={senha} onChange={handleSenha} />
        <Button className='input-login' variant="contained" type='submit' size='small' color="primary" >Entrar</Button>
    </form>
  );
}