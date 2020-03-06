import React from 'react';
import Header from "../../Components/Header/Header";
import './Doacoes.css';
import CardUsuario from '../../Components/Card_Usuario/Card_Usuario';
import Card from '../../Components/Card/Card';

export default function Doacoes() {
    return ( 
	<div>
        <Header/>
        <div className="card-unidade">
            <Card/>
        </div>
        <div className="card-usuario" >
            <h2>Usuários</h2>
            <CardUsuario/>
        </div>
     </div>
    );
}