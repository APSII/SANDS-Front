import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton, Divider, Button } from '@material-ui/core';
import Pesquisar from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';

import './Header.css';
import logo from '../../assets/logo-header.png';

export default function Header({ setToggle, nome, local }) {
  const history = useHistory();
  const handleClick = () => {
    setToggle(true);
  };
  const handleExit = () => {
    localStorage.removeItem('auth_token');
    history.push('/');
  };
  return (
    <div className="container-header">
      <div className="barra-icones">
        <div className="logo-header">
          <img src={logo} alt="SANDS" />
        </div>
        <div className="botoes-header">
          <IconButton>
            <Pesquisar />
          </IconButton>
          <IconButton onClick={handleExit}>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="titulo">
        <p>{nome}</p>
        {local === 'unidade' ? (
          <Button
            variant="contained"
            onClick={handleClick}
            color="primary"
            startIcon={<AddIcon />}
          >
            CRIAR UNIDADE
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleClick}
            color="primary"
            startIcon={<AddIcon />}
          >
            CRIAR USUARIO
          </Button>
        )}
      </div>
      <Divider />
    </div>
  );
}
