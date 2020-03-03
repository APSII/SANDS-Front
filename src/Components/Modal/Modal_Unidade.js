import React, {useState, useEffect} from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import api from '../../Service/api'
import logo from '../../assets/logo.png'
import './Modal_Unidade.css'

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export default function Modal_Unidade({show, setToggle}) {
  
  var toggle = show
  const [estados,setEstados] = useState([])
  const [estado,setEstado] = useState()

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await api.get('/estado?$limit=27')
      await sleep(1e3); // For demo purposes.
      const teste = await response.data
      
      if (active) {
        setOptions(teste);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  
  /* useEffect(() => {
    async function loadEstados() {
      const response = await api.get('/estado?$limit=27')

      setEstados(response.data.data)
      
    }

    loadEstados();
  }, []); */
  
  /* const response = api.get('/estado?$limit=27')

  setEstados(response.data.data) */

  /* const estadoOpt = estados.map(option => <MenuItem key={option.id} value={option.id}>{option.nome}</MenuItem>) */

  const handleClick = event => {
    toggle = 'modal toggle-modal'
    setToggle(false)
  }
  /* const handleEstado = event =>{
    setEstado(event.target.value) 
  } */
  
  return (
    <div className={toggle}>
      <div className="modal-fade" onClick={handleClick} />
      <div className="modal-container">
          <div className="header-modal">
              <img src={logo} alt="SANDS" />
          </div>
          <form>
            <TextField className="input-modal" id="unidade" size="small" label="Unidade" variant="outlined" />
            <Autocomplete className="input-modal" id="estado" open={open} onOpen={() => {setOpen(true);}} onClose={() => { setOpen(false); }}
            getOptionSelected={(option, value) => option.nome === value.name}
            getOptionLabel={option => option.nome}
            options={options}
            loading={loading}
            renderInput={params => (
              <TextField
                {...params}
                label="Estado"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
            />

            {/* <FormControl className="input-modal" variant="outlined" >
              <InputLabel id="select-estado">Estado</InputLabel>
              <Select labelId="select-estado" id="estado" value={estado} onChange={handleEstado}>
                {estadoOpt}
              </Select>
            </FormControl> */}
            <TextField className="input-modal" id="endereco" size="small" label="Endereço" variant="outlined" />
            <Button className='input-modal' variant="contained" size='small' color="primary">Salvar</Button>
          </form>
      </div>
    </div>
  );
}