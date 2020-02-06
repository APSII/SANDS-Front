import React from 'react';
import {IconButton, Divider} from '@material-ui/core';
import Pesquisar from '@material-ui/icons/Search';
import Menu from '@material-ui/icons/MoreVert';

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
        </div>
        <Divider />
    </div>
  );
}