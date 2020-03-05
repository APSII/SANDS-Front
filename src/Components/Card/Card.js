/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Chip } from '@material-ui/core/';
import './Card.css';
import imagem from '../../assets/sem_foto.png';

export default function Card({ unidade, endereco, click, val, user = false }) {
  const handleClick = () => {
    user ? click({ click: true, key: val }) : console.log('false');
  };
  return (
    <div className="container-card" onClick={handleClick}>
      <div className="card-img">
        <img src={imagem} alt="Hemocentro" />
      </div>
      <div className="card-body">
        <div className="card-titulo">
          <h5>{unidade}</h5>
        </div>
        <div className="card-endereco">
          <h5>Endereço</h5>
          <p>{endereco}</p>
        </div>
        <div className="card-usuarios">
          <div className="card-label-usuarios">
            <h5>Usuarios</h5>
          </div>
          <div className="usuario-chips">
            <Chip label="Patrick" />
            <Chip label="Guilherme" />
            <Chip label="Karol" />
            <Chip label="Jean" />
          </div>
        </div>
      </div>
    </div>
  );
}
