/* eslint-disable camelcase */
import React from 'react';
import './Doacao_Usuario.css';
import { Favorite } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

export default function Card_Usuario() {
  return (
    <div className="doacao-usuario-container">
      <div className="doacao-usuario-icon">
      <Favorite className="text-danger"/>
      </div>
      <div className="doacao-usuario-nomeUsuario">
        <h5>João</h5>
        <p>01/11/2019 09:29</p>
      </div>
      <Divider/>
    </div>
  );
}
