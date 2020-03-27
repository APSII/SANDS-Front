import React from 'react';
import FormLogin from '../../Components/Form-Login';
import './Inicial.css';
import logo from '../../assets/logo.png';

export default function Inicial() {
  return (
    <div className="container-login">
      <div className="card-login">
        <div className="header-login">
          <img src={logo} alt="SANDS" />
        </div>
        <FormLogin />
      </div>
    </div>
  );
}
