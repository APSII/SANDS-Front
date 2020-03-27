/* eslint-disable camelcase */
import React from 'react';
import './Card_Usuario.css';
import { Favorite } from '@material-ui/icons';

export default function Card_Usuario({ email, nome }) {
  return (
    <div className="card-usuario-container">
      <div className="card-usuario-email">
        <p>{email}</p>
      </div>
      <div className="card-usuario-nomeUsuario">
        <h5>{nome}</h5>
      </div>
      <div className="card-usuario-resultado">
        <Favorite className="text-danger" />
        <p>Cadastrou 1459 doações</p>
      </div>
    </div>
  );
}
