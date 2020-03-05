import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import api from '../../Service/api';
// import { Container } from './styles';

export default function Usuarios() {
  const [hemocentro, setHemocentro] = useState([]);

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

  const unidade = hemocentro.map(un => {
    return (
      <Card key={un.id} val={un.id} unidade={un.nome} endereco={un.endereco} />
    );
  });

  return (
    <div>
      <Header nome="Patrick" /* setToggle={setToggle} */ />
      <div className="main-container">{unidade}</div>
    </div>
  );
}
