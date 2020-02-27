import React, {useState} from 'react';

import Header from "../../Components/Header/Header";
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal_Unidade'
import './Main.css'

export default function Main() {
  const [toggle, setToggle] = useState(false)
  var show
  if(toggle){
    show = 'modal-fade'
  }else{
    show = 'modal-fade toggle-modal'
  }
  return (
      <div>
        <Header nome="Patrick" setToggle={setToggle} />
        <div className="main-container" >
            <Card unidade="Hemocentro de Cuiabá" endereco="Av. Fernando Corrêa da Costa, nº 2367, Bairro Boa Esperança - UFMT, Cuiabá - MT" />
            <Card unidade="Hemocentro de Sinop" endereco="Av. Fernando Corrêa da Costa, nº 2367, Bairro Boa Esperança - UFMT, Cuiabá - MT" />
            <Card unidade="Hemocentro de Varzea Grande" endereco="Av. Fernando Corrêa da Costa, nº 2367, Bairro Boa Esperança - UFMT, Cuiabá - MT" />
        </div>
        <Modal show={show} setToggle={setToggle} />
      </div>
  );
}