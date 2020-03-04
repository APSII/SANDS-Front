/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal_Unidade';
import api from '../../Service/api';
import './Main.css';

export default function Main() {
  const [toggle, setToggle] = useState(false);
  const [o, setO] = useState([]);
  let show;
  if (toggle) {
    show = 'modal';
  } else {
    show = 'modal toggle-modal';
  }

  useEffect(() => {
    const loadUnidade = async () => {
      const response = await api.get(
        '/hemocentro?$include=endereco.cidade.estado'
      );
      const { data } = await response.data;
      const objeto = data.map(un => {
        const ob = {};
        ob.nome = un.nome;
        ob.id = un.id;
        ob.endereco = un.endereco.endereco;
        ob.cidade = un.endereco.cidade.nome;
        ob.estado = un.endereco.cidade.estado.nome;
        return ob;
      });
      setO(objeto);
    };
    loadUnidade();
  }, []);

  const unidades = o.map(unidade => {
    return (
      <Card
        key={unidade.id}
        unidade={unidade.nome}
        endereco={unidade.endereco}
      />
    );
  });

  return (
    <div>
      <Header nome="Patrick" setToggle={setToggle} />
      <div className="main-container">{unidades}</div>
      <Modal show={show} setToggle={setToggle} />
    </div>
  );
}
