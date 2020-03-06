/* eslint-disable camelcase */
import React from 'react';
import './Card_Usuario.css';
import { Favorite } from '@material-ui/icons';

export default function Card_Usuario() {
  return (
    <div className="card-usuario-container">
      <div className="card-usuario-email">
        <a>teste@teste.com</a>
      </div>
      <div className="card-usuario-nomeUsuario">
        <h5>Maria Rodrigues</h5>
      </div>
      <div className="card-usuario-resultado">
        <Favorite className="text-danger"/><a>Cadastrou 1459 doações</a>
      </div>
    </div>
  );
}
