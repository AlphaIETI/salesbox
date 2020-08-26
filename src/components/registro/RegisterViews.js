import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from '../../logo.png';
import { CredentialsList } from '../credential/CredentialsList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
     
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function RegisterViews() {
  const classes = useStyles();
  const state={items:[{ nombre:"Juliana",  email:"Juliana@mail.com", direccion:"cra 1 #23-4",
  telefono :4234, fecha :new Date(2020,1,23), usuario:"julianagarzond" , password:"12345"}], 
  nombre:false,  email:"", direccion:"",telefono :"", usuario:"", password:""};
  const [nombre, setnombre]=React.useState("");
  const [email, setemail]=React.useState("");
  const [direccion, setdireccion]=React.useState("");
  const [telefono, settelefono]=React.useState("");
  const [fecha, setfecha]=React.useState("");
  const [usuario, setusuario]=React.useState("");
  const [contrasena, setcontrasena]=React.useState("");
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeNombre=(e) =>
  {
    setnombre({ nombre: document.getElementById(nombre) });
   }
  const handleChangeEmail=(e) =>
  {
    setemail({ email: e.target.value });
  }

  const handleChangeDireccion=(e) =>
  {
    setdireccion({ direccion: e.target.value });
  }
  
  const handleChangeTelefono=(e) =>
  {
    settelefono({ telefono: e.target.value });
  }

  const handleChangeFecha=(e) =>
  {
     setfecha({ fecha: e.target.value });
  }

  const handleChangeUsuario=(e) =>
  {
      setusuario({ usuario: e.target.value });
  }

  const handleChangeContrasena=(e) =>
  {
     setcontrasena({ contrasena: e.target.value });
  }
  const handleSubmit=(e) =>
  {
    if (!state.nombre.length) {
      return;
    }

    const newItem ={
      nombre:state.nombre,
      email: state.email,
      direccion: state.direccion,
      telefono: state.telefono,
      fecha : state.fecha,
      usuario: state.usuario,
      password :state.password


    }

    alert('Nuevo usuario'+ newItem.usuario);


  }

  return (
  
    <div className={classes.root} style={{ width:'480px', margin:'0 auto'}}>
      <AppBar position="static"  style={{width:'480px', margin:'0 auto' , background: 'BLACK'}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
          <Tab label="Empresa" {...a11yProps(0)} />
          <Tab label="Cliente" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    
      <TabPanel value={value} index={0} >

      
        <img src={logo}  alt="logo"   style={{ height:'150px',position: 'relative', top: '0px', right: '-100px'}} />
      
       
  
          <input
            style={{width:'400px', margin:'0 auto'}}
            type="text"
            class="form-control textbox-dg"
            placeholder="Nombre Empresa"
          
            
           />
          <br />
          <br />
          <input
            style={{width:'400px', margin:'0 auto'}}
            type="text"
            class="form-control textbox-dg"
            placeholder="Nit"
          
     
          />
          <br />
          <br />
          <input
            style={{width:'400px', margin:'0 auto'}}
            type="email"
            class="form-control textbox-dg"
            placeholder="Email"
     
          />
          <br />
          <br />
          <input
            style={{width:'400px', margin:'0 auto'}}
            type="text"
            class="form-control textbox-dg"
            placeholder="Dirección"
           
          />
          <br />
          <br />
    
           <input
              style={{width:'400px', margin:'0 auto'}}
              type="text"
              class="form-control textbox-dg"
              placeholder="Usuario"
            
            />
            <br />
            <br />
            <input
              style={{width:'400px', margin:'0 auto'}}
              type="Password"
              class="form-control textbox-dg"
              placeholder="Contraseña"
             
            />
             <br />
             <br />
          <button  class ="myButton2"  style={{position: 'relative', top: '0px', right: '-140px'}}> 
            Registrarse
          </button>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <img src={logo} style={{ height:'150px',position: 'relative', top: '0px', right: '-100px'}} />
      
          <input
           id ="nombre"
           style={{width:'400px', margin:'0 auto'}}
            type="text"
            class="form-control textbox-dg"
            placeholder="Nombre"
            onChange={handleChangeNombre}
            
           
            
           />
          <br />
          <br />
          <input
           style={{width:'400px', margin:'0 auto'}}
            type="email"
            class="form-control textbox-dg"
            placeholder="Email"
            onChange={handleChangeEmail}
           
     
          />
          <br />
          <br />
          <input
            style={{width:'400px', margin:'0 auto'}}
            type="text"
            class="form-control textbox-dg"
            placeholder="Dirección"
            onChange={handleChangeDireccion}
        
           
          />
          <br />
          <br />
          <input
             style={{width:'400px', margin:'0 auto'}}
             type="number"
             class="form-control textbox-dg"
             placeholder="Telefono"
             onChange={handleChangeTelefono}
       
          />
           <br />
           <br />
           <input
              style={{width:'400px', margin:'0 auto'}}
              type="date"
              class="form-control textbox-dg"
              placeholder="Fecha de nacimiento"
              onChange={handleChangeFecha}
           
            />
           <br />
           <br />
           <input
              style={{width:'400px', margin:'0 auto'}}
              type="text"
              class="form-control textbox-dg"
              placeholder="Usuario"
              onChange={handleChangeUsuario}
           
            
            />
             <br />
            <br />
            <input
              style={{width:'400px', margin:'0 auto'}}
              type="Password"
              class="form-control textbox-dg"
              placeholder="Contraseña"
              onChange={handleChangeContrasena}
            
             
            />
             <br />
             <br />
          <button  class ="myButton2"  style={{position: 'relative', top: '0px', right: '-140px'}}>
            Registrarse
          </button>

          <p>
           <CredentialsList todoList={state.items} />
           </p>
      </TabPanel>
      
    </div>
    
  );
}
