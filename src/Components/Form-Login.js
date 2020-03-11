import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import api from '../Service/api';

// import { Container } from './styles';

export default function FormLogin() {
  const [identificador, setIdentificador] = useState('');
  const [senha, setSenha] = useState('');
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const handleIdentificador = event => {
    setIdentificador(event.target.value);
  };
  const handleSenha = event => {
    setSenha(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = event => {
    event.preventDefault();
    api
      .post('/auth', { strategy: 'local', identificador, password: senha })
      .then(res => {
        const token = res.data.accessToken;
        const { admin, hemocentroId } = res.data.usuario;
        localStorage.setItem('auth_token', token);
        localStorage.setItem('admin', admin);
        localStorage.setItem('unidadeId', hemocentroId);

        if (admin) {
          history.replace('/unidade');
        } else {
          history.replace('/doacoes');
        }
      })
      .catch(res => {
        setOpen(true);
        setMsg(res.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="input-login"
        id="identificador"
        size="small"
        label="Identificador"
        variant="outlined"
        value={identificador}
        onChange={handleIdentificador}
      />
      <TextField
        className="input-login"
        id="senha"
        size="small"
        type="password"
        label="Senha"
        variant="outlined"
        value={senha}
        onChange={handleSenha}
      />
      <Button
        className="input-login"
        variant="contained"
        type="submit"
        size="small"
        color="primary"
        onKeyPress={handleSubmit}
      >
        Entrar
      </Button>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={4000}>
        <Alert onClose={handleClose} severity="error">
          {msg}
        </Alert>
      </Snackbar>
    </form>
  );
}
