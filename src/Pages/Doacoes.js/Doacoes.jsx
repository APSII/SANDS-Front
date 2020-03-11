import React from 'react';
import Header from "../../Components/Header/Header";
import './Doacoes.css';
import CardUsuario from '../../Components/Card_Usuario/Card_Usuario';
import Card from '../../Components/Card/Card';
import DoacaoUsuario from '../../Components/Card_Usuario/Doacao_Usuario';

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
        <div className="doacao-usuario" >
            <DoacaoUsuario/>
        </div>
        
     </div>
    );
}