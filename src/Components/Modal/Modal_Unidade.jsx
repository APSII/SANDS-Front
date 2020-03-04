import React, {useState, useEffect} from 'react';
import { TextField, Button, Snackbar} from '@material-ui/core';
import {Autocomplete, Alert} from '@material-ui/lab';
import api from '../../Service/api'
import logo from '../../assets/logo.png'
import './Modal_Unidade.css'

export default function Modal_Unidade({show, setToggle}) {
  
  var toggle = show
  const [estados,setEstados] = useState([])
  const [estado, setEstado] = useState()
  const [cidades,setCidades] = useState([])
  const [cidade, setCidade] = useState()
  const [endereco, setEndereco] = useState('')
  const [msg, setMsg] = useState('')
  const [hemocentro, setHemocentro] = useState('')

  const [open, setOpen] = useState(false)
  const [openEstado, setOpenEstado] = useState(false);
  const [openCidade, setOpenCidade] = useState(false);
  const loading = openEstado && estados.length === 0 ;
  const loadingCidade = openCidade && cidades.length === 0

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await api.get('/estado?$limit=27')
      const teste = await response.data
      
      if (active) {
        setEstados(teste);
        
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    let active = true;

    if (!estado) {
      return undefined;
    }

    (async () => {
      const response = await api.get(`/cidade?estadoId=${estado}`)
      const teste = await response.data
      
      if (active) {
        setCidades(teste);
      }
    })();

    return () => {
      active = false;
    };
  }, [estado, loadingCidade]);

  useEffect(() => {
    if (!openEstado) {
      setEstados([]);
    }
  }, [openEstado]);

  useEffect(() => {
    if (!openCidade) {
      setCidades([]);
    }
  }, [openCidade]);
  

  const handleClick = event => {
    toggle = 'modal toggle-modal'
    setToggle(false)
    setHemocentro('')
    setEndereco('')
    setEstado()
    setCidade()
  }
  const handleClose = event =>{
    setOpen(false)
  }
  const handleEstado = (option, value) =>{
    setEstado(value.id)
  }
  const handleCidade = (option, value) =>{
    setCidade(value.id)
  }
  const handleEndereco = event =>{
    setEndereco(event.target.value)
  }
  const handleHemocentro = event =>{
    setHemocentro(event.target.value)
  }

  const handleSubmit = event =>{
    event.preventDefault()
    api.post('/endereco', {endereco, 'cidadeId':cidade}).then(res =>{
      const enderecoId = res.data.id
      api.post('/hemocentro', {'nome':hemocentro, enderecoId}).then(res =>{
        handleClick()
        
      }).catch(res =>{
        setOpen(true)
        setMsg(res.message)
      })
    }).catch(res =>{
      setOpen(true)
      setMsg(res.message)
    })
  }
  
  return (
    <div className={toggle}>
      <div className="modal-fade" onClick={handleClick} />
      <div className="modal-container">
          <div className="header-modal">
              <img src={logo} alt="SANDS" />
          </div>
          <form onSubmit={handleSubmit} >
            <TextField className="input-modal" id="unidade" size="small" label="Unidade" variant="outlined" value={hemocentro} onChange={handleHemocentro} />
            <Autocomplete className="input-modal" id="estado" open={openEstado} onOpen={() => {setOpenEstado(true);}} onClose={() => { setOpenEstado(false); }}
            onChange={handleEstado}
            getOptionLabel={option => option.nome}
            loading={loading}
            options={estados}
            renderInput={params => (
              <TextField
                {...params}
                label="Estado"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
            />

            {estado ?
            (
              <Autocomplete className="input-modal" id="cidade" open={openCidade} onOpen={() => {setOpenCidade(true);}} onClose={() => { setOpenCidade(false); }}
            onChange={handleCidade}
            getOptionLabel={option => option.nome}
            loading={loadingCidade}
            options={cidades}
            renderInput={params => (
              <TextField
                {...params}
                label="Cidade"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
            />
            ):(<></>)
              }
            <TextField className="input-modal" id="endereco" value={endereco} size="small" label="Endereço" variant="outlined" onChange={handleEndereco} />
            <Button className='input-modal' type='submit' variant="contained" size='small' color="primary">Salvar</Button>
            <Snackbar open={open} onClose={handleClose} autoHideDuration={4000} >
              <Alert onClose={handleClose} severity="error">
                {msg}
              </Alert>
            </Snackbar>
          </form>
      </div>
    </div>
  );
}