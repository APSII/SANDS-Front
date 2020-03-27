/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import api from '../../Service/api';
import logo from '../../assets/logo.png';
import './Modal_Unidade.css';

export default function ModalUnidade({ show, setToggle }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let toggle = show;

  const handleNome = event => {
    setNome(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const hemocentroId = localStorage.getItem('unidadeId');
    api.post('/usuario', { nome, email, password, hemocentroId }).then(res => {
      const uid = res.data.id;
      api
        .put(`/usuario/${uid}`, {
          nome,
          email,
          password,
          hemocentroId,
          identificador: `H${hemocentroId}U${uid}`,
          ativo: true,
        })
        .then(() => {
          setNome('');
          setEmail('');
          setPassword('');
          setToggle(false);
        });
    });
  };
  const handleClick = () => {
    toggle = 'modal toggle-modal';
    setToggle(false);
    setPassword('');
    setNome();
    setEmail();
  };

  return (
    <div className={toggle}>
      <div className="modal-fade" onClick={handleClick} />
      <div className="modal-container">
        <div className="header-modal">
          <img src={logo} alt="SANDS" />
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            className="input-login"
            size="small"
            label="Nome"
            value={nome}
            onChange={handleNome}
            variant="outlined"
          />
          <TextField
            className="input-login"
            size="small"
            label="Email"
            value={email}
            onChange={handleEmail}
            variant="outlined"
          />
          <TextField
            className="input-login"
            size="small"
            type="password"
            label="Senha"
            value={password}
            onChange={handlePassword}
            variant="outlined"
          />
          <Button
            className="input-login"
            variant="contained"
            size="small"
            color="primary"
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
}
