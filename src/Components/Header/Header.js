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
    localStorage.clear();
    history.replace('/');
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
        <Button
          variant="contained"
          onClick={handleClick}
          color="primary"
          startIcon={<AddIcon />}
        >
          {local}
        </Button>
      </div>
      <Divider />
    </div>
  );
}
