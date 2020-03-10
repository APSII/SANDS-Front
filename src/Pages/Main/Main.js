/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal_Unidade';
import api from '../../Service/api';
import './Main.css';

export default function Main() {
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState({ click: false, key: '' });
  const [hemocentro, setHemocentro] = useState([]);
  const history = useHistory();
  let show;
  if (toggle) {
    show = 'modal';
  } else {
    show = 'modal toggle-modal';
  }
  if (click.click) {
    localStorage.setItem('unidadeId', click.key);
    history.push('/usuarios');
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
      setHemocentro(objeto);
    };
    loadUnidade();
  }, []);

  const unidades = hemocentro.map(unidade => {
    return (
      <Card
        key={unidade.id}
        val={unidade.id}
        unidade={unidade.nome}
        endereco={unidade.endereco}
        user
        click={setClick}
      />
    );
  });

  return (
    <div>
      <Header nome="Patrick" setToggle={setToggle} local="unidade" />
      <div className="main-container">{unidades}</div>
      <Modal show={show} setToggle={setToggle} />
    </div>
  );
}
