import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal_Doador';
import DoacaoUsuario from '../../Components/Card_Usuario/Doacao_Usuario';
import api from '../../Service/api';
import './Doacoes.css';
// import { Container } from './styles';

export default function Usuarios() {
  const [hemocentro, setHemocentro] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [toggle, setToggle] = useState(false);
  let show;
  if (toggle) {
    show = 'modal';
  } else {
    show = 'modal toggle-modal';
  }
  useEffect(() => {
    const loadUnidade = async () => {
      const unidadeId = localStorage.getItem('unidadeId');
      const response = await api.get(
        `/hemocentro?id=${unidadeId}&$include=endereco`
      );
      const { data } = await response.data;
      const objeto = data.map(un => {
        const ob = {};
        ob.nome = un.nome;
        ob.id = un.id;
        ob.endereco = un.endereco.endereco;
        return ob;
      });
      setHemocentro(objeto);
    };
    loadUnidade();
  }, []);

  useEffect(() => {
    const loadUsuarios = async () => {
      const response = await api.get(`/doador`);
      const usuarios = await response.data.data;
      setUsuario(usuarios);
    };
    loadUsuarios();
  }, [toggle]);

  const unidade = hemocentro.map(un => {
    return (
      <Card key={un.id} val={un.id} unidade={un.nome} endereco={un.endereco} />
    );
  });
  const usuarios = usuario.map(user => {
    const fdata = parseISO(user.updatedAt);
    const data = format(fdata, 'dd/MM/yyyy HH:mm');
    return <DoacaoUsuario key={user.id} nome={user.nome} data={data} />;
  });

  return (
    <div>
      <Header nome="Patrick" local="Cadastrar Doador" setToggle={setToggle} />
      <div className="main-container">
        {unidade}
        <div className="usuarios-container">
          <h2>Doadores</h2>
          {usuarios}
        </div>
      </div>
      <Modal show={show} setToggle={setToggle} />
    </div>
  );
}
