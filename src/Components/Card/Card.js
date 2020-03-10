/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Chip } from '@material-ui/core/';
import api from '../../Service/api';
import './Card.css';
import imagem from '../../assets/sem_foto.png';

export default function Card({ unidade, endereco, click, val, user = false }) {
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    const loadUsuarios = async () => {
      const response = await api.get(`/usuario?hemocentroId=${val}`);
      const usuarios = await response.data.data;
      setUsuario(usuarios);
    };
    loadUsuarios();
  }, []);
  const handleClick = () => {
    user ? click({ click: true, key: val }) : console.log('false');
  };
  const usuarios = usuario.map(({ id, nome }) => {
    return <Chip key={id} label={nome} />;
  });
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
          <div className="usuario-chips">{usuarios}</div>
        </div>
      </div>
    </div>
  );
}
