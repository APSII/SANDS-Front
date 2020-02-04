import React from 'react';
import { TextField, /* InputAdornment, */ Button } from '@material-ui/core';
/* import { Visibility, VisibilityOff} from '@material-ui/icons' */
// import { Container } from './styles';
import "./Login.css"
import logo from '../assets/logo.png'


export default function Login() {
  return (
    <div className="container-login">
        <div className="card-login">
            <div className="header-login">
                <img src={logo} alt="SANDS" />
            </div>
            <form action="">
                <TextField className="input-login" id="usuario" size="small" label="Usuário" variant="outlined" />
                <TextField className="input-login" id="senha"
                size="small" type="password" label="Senha"
                variant="outlined"/>
                <Button className='input-login' variant="contained" size='small' color="primary">Entrar</Button>
            </form>
        </div>
    </div>
  );
}