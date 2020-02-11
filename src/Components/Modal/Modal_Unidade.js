import React from 'react';
import { TextField, Button } from '@material-ui/core';

import logo from '../../assets/logo.png'
import './Modal_Unidade.css'
export default function Modal_Unidade(props) {
  
  const toggle_modal = props.toggle === 'show'? '': 'toggle-modal'
  return (
    <div className={`modal-fade ${toggle_modal}`} >
        <div className="modal-container">
            <div className="header-modal">
                <img src={logo} alt="SANDS" />
            </div>
            <form>
              <TextField className="input-modal" id="unidade" size="small" label="Unidade" variant="outlined" />
              <TextField className="input-modal" id="endereco" size="small" label="Endereço" variant="outlined" />
              <Button className='input-modal' variant="contained" size='small' color="primary">Salvar</Button>
            </form>
        </div>
    </div>
  );
}