/* eslint-disable camelcase */
import React from 'react';
import './Doacao_Usuario.css';
import { Favorite } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

export default function Card_Usuario({ nome, data }) {
  return (
    <div className="doacao-usuario-container">
      <div className="doacao-usuario-icon">
        <Favorite className="text-danger" />
      </div>
      <div className="doacao-usuario-nomeUsuario">
        <h5>{nome}</h5>
        <p>{data}</p>
      </div>
      <Divider />
    </div>
  );
}
