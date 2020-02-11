import React from 'react';

import Header from "../../Components/Header/Header";
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal_Unidade'
import './Main.css'

export default function Main() {
  return (
      <div>
        <Header nome="Patrick" />
        <div className="main-container" >
            <Card unidade="Hemocentro de Cuiabá" endereco="Av. Fernando Corrêa da Costa, nº 2367, Bairro Boa Esperança - UFMT, Cuiabá - MT" />
            <Card unidade="Hemocentro de Sinop" endereco="Av. Fernando Corrêa da Costa, nº 2367, Bairro Boa Esperança - UFMT, Cuiabá - MT" />
            <Card unidade="Hemocentro de Varzea Grande" endereco="Av. Fernando Corrêa da Costa, nº 2367, Bairro Boa Esperança - UFMT, Cuiabá - MT" />
        </div>
        <Modal toggle='off' />
      </div>
  );
}