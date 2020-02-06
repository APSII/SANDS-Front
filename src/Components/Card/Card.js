import React from 'react';
import {Chip} from '@material-ui/core/';
import './Card.css'
import imagem from '../../assets/sem_foto.png'

export default function Card(props) {
  return (
    <div className="container-card">
        <div className="card-img">
            <img src={imagem} alt="Hemocentro"/>
        </div>
        <div className="card-body">
            <div className="card-titulo">
            <h5>{props.unidade}</h5>
            </div>
            <div className="card-endereco">
                <h5>Endereço</h5>
                <p>{props.endereco}</p>
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