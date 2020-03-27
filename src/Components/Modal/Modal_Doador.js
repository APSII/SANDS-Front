/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import ptLocale from 'date-fns/locale/pt-BR';
import DateFnsUtils from '@date-io/date-fns';
import api from '../../Service/api';
import logo from '../../assets/logo.png';
import './Modal_Unidade.css';

export default function ModalUnidade({ show, setToggle }) {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [sangue, setSangue] = useState('');
  const [telefone, setTelefone] = useState('');
  const [datanasc, setDatanasc] = useState(new Date(null));
  const [email, setEmail] = useState('');
  let toggle = show;

  const handleNome = event => {
    setNome(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handleTelefone = event => {
    setTelefone(event.target.value);
  };
  const handleCPF = event => {
    setCPF(event.target.value);
  };
  const handleDatanasc = date => {
    setDatanasc(date);
  };
  const handleSangue = event => {
    setSangue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const hemocentroId = localStorage.getItem('unidadeId');
    api
      .post('/doador', {
        nome,
        email,
        dataNascimento: datanasc,
        tipoSangue: sangue,
        telefone,
        hemocentroId,
        cpf,
        ativo: true,
      })
      .then(() => {
        setToggle(false);
        setNome('');
        setEmail('');
        setDatanasc(null);
        setTelefone('');
        setSangue('');
        setCPF('');
      });
  };
  const handleClick = () => {
    toggle = 'modal toggle-modal';
    setToggle(false);
    setNome('');
    setEmail('');
    setDatanasc(null);
    setTelefone('');
    setSangue('');
    setCPF('');
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
            label="Tipo Sanguineo"
            value={sangue}
            onChange={handleSangue}
            variant="outlined"
          />
          <TextField
            className="input-login"
            size="small"
            label="CPF"
            value={cpf}
            onChange={handleCPF}
            variant="outlined"
          />
          <MuiPickersUtilsProvider locale={ptLocale} utils={DateFnsUtils}>
            <DatePicker
              className="input-login"
              inputVariant="outlined"
              label="Data de Nascimento"
              format="dd/MM/yyyy"
              value={datanasc}
              onChange={handleDatanasc}
            />
          </MuiPickersUtilsProvider>

          <TextField
            className="input-login"
            size="small"
            label="Telefone"
            value={telefone}
            onChange={handleTelefone}
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
