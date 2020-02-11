import React from 'react';
import {IconButton, Divider, Button} from '@material-ui/core';
import Pesquisar from '@material-ui/icons/Search';
import Menu from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';

import './Header.css'
import logo from "../../assets/logo-header.png";


export default function Header(props) {
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
                <IconButton>
                    <Menu />
                </IconButton>
            </div>
        </div>
        <div className="titulo">
            <p>{props.nome}</p>
            <Button variant="contained" color='primary' startIcon={<AddIcon />} >
                CRIAR UNIDADE
            </Button>
        </div>
        <Divider />
    </div>
  );
}