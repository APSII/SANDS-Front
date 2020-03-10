import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import CardUsuario from '../../Components/Card_Usuario/Card_Usuario';
import api from '../../Service/api';
import './Usuarios.css';
// import { Container } from './styles';

export default function Usuarios() {
  const [hemocentro, setHemocentro] = useState([]);
  const [usuario, setUsuario] = useState([]);

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
      const hemocentroID = localStorage.getItem('unidadeId');
      const response = await api.get(`/usuario?hemocentroId=${hemocentroID}`);
      const usuarios = await response.data.data;
      setUsuario(usuarios);
    };
    loadUsuarios();
  }, []);

  const unidade = hemocentro.map(un => {
    return (
      <Card key={un.id} val={un.id} unidade={un.nome} endereco={un.endereco} />
    );
  });
  const usuarios = usuario.map(user => {
    return <CardUsuario key={user.id} nome={user.nome} email={user.email} />;
  });

  return (
    <div>
      <Header nome="Patrick" /* setToggle={setToggle} */ />
      <div className="main-container">
        {unidade}
        <div className="usuarios-container">
          <h2>Usuarios</h2>
          {usuarios}
        </div>
      </div>
    </div>
  );
}
