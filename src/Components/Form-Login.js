import React from 'react';
import { TextField, /* InputAdornment, */ Button } from '@material-ui/core';

// import { Container } from './styles';

export default function FormLogin() {
  return (
    <form action="">
        <TextField className="input-login" id="usuario" size="small" label="Usuário" variant="outlined" />
        <TextField className="input-login" id="senha"
        size="small" type="password" label="Senha"
        variant="outlined"/>
        <Button className='input-login' variant="contained" size='small' color="primary">Entrar</Button>
    </form>
  );
}