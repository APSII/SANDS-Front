import React from 'react';
import FormLogin from "../../Components/Form-Login";
import FormCadastro from "../../Components/Form-Cadastro";
/* import { Visibility, VisibilityOff} from '@material-ui/icons' */
// import { Container } from './styles';
import './Inicial.css'
import logo from '../../assets/logo.png'

const page = 2

export default function Inicial() {
  return (
    <div className="container-login">
        <div className="card-login">
            <div className="header-login">
                <img src={logo} alt="SANDS" />
            </div>
            {page === 1? <FormLogin /> : <FormCadastro />}
            
        </div>
    </div>
  );
}