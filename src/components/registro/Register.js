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

export default function Register() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  const handleOnClick=(e) =>{
    var correo= document.getElementById("emailEmpresa").value;
    if(document.getElementById("nombreEmpresa").value==="" || document.getElementById("nit").value === "" || document.getElementById("emailEmpresa").value===""
       || document.getElementById("direccionEmpresa").value==="" || document.getElementById("usuarioEmpresa").value === "" || 
       document.getElementById("contrasenaEmpresa").value===""){ 
         alert("Hay campos vacios");   
    }
     if(!correo.includes('@')){
          alert("no es un correo válido");

     }
   };


   const handleOnClickCliente=(e) =>{
    var correo= document.getElementById("email").value;
    if(document.getElementById("nombreCliente").value==="" || document.getElementById("direccionCliente").value === "" || document.getElementById("email").value===""
       || document.getElementById("direccionCliente").value==="" || document.getElementById("telefonoCliente").value === "" || 
       document.getElementById("fechaNacimiento").value==="" || document.getElementById("usuarioCliente").value==="" || document.getElementById("usuarioContrasena").value==="" ){ 
         alert("Hay campos vacios");   
    }
     if(!correo.includes('@')){
          alert("no es un correo válido");

     }
   };

  

  

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
            id="nombreEmpresa"
            style={{width:'400px', margin:'0 auto'}}
            type="text"
            className="form-controlj textbox-dgj"
            placeholder="Nombre Empresa"
          
            
           />
          <br />
          <br />
          <input
            id="nit"
            style={{width:'400px', margin:'0 auto'}}
            type="text"
            className="form-controlj textbox-dgj"
            placeholder="Nit"
          
     
          />
          <br />
          <br />
          <input
            id="emailEmpresa"
            style={{width:'400px', margin:'0 auto'}}
            type="email"
            className="form-controlj textbox-dgj"
            placeholder="Email"
          
     
          />
          <br />
          <br />
          <input
            id="direccionEmpresa"
            style={{width:'400px', margin:'0 auto'}}
            type="text"
            className="form-controlj textbox-dgj"
            placeholder="Dirección"
           
          />
          <br />
          <br />
    
           <input
              id="usuarioEmpresa"
              style={{width:'400px', margin:'0 auto'}}
              type="text"
              className="form-controlj textbox-dgj"
              placeholder="Usuario"
            
            />
            <br />
            <br />
            <input
              id="contrasenaEmpresa"
              style={{width:'400px', margin:'0 auto'}}
              type="Password"
              className="form-controlj textbox-dgj"
              placeholder="Contraseña"
             
            />
             <br />
             <br />
          <button  class ="myButton2" onClick={handleOnClick} style={{position: 'relative', top: '0px', right: '-140px'}}> 
            Registrarse
          </button>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <img src={logo} style={{ height:'150px',position: 'relative', top: '0px', right: '-100px'}} />
      
          <input
           id ="nombreCliente"
           style={{width:'400px', margin:'0 auto'}}
            type="text"
            className="form-controlj textbox-dgj"
            placeholder="Nombre"
           
            
           
            
           />
          <br />
          <br />
          <input
          id="email"
          style={{width:'400px', margin:'0 auto'}}
          type="email"
          className="form-controlj textbox-dgj"
          placeholder="Email"
          
           
     
          />
          <br />
          <br />
          <input
            id="direccionCliente"
            style={{width:'400px', margin:'0 auto'}}
            type="text"
            className="form-controlj textbox-dgj"
            placeholder="Dirección"
          
        
           
          />
          <br />
          <br />
          <input
             id="telefonoCliente"
             style={{width:'400px', margin:'0 auto'}}
             type="number"
             className="form-controlj textbox-dgj"
             placeholder="Telefono"
            
       
          />
           <br />
           <br />
           <input
              id="fechaNacimiento"
              style={{width:'400px', margin:'0 auto'}}
              type="date"
              className="form-controlj textbox-dgj"
              placeholder="Fecha de nacimiento"
            
           
            />
           <br />
           <br />
           <input
              id="usuarioCliente"
              style={{width:'400px', margin:'0 auto'}}
              type="text"
              className="form-controlj textbox-dgj"
              placeholder="Usuario"
             
           
            
            />
             <br />
            <br />
            <input
              id="contrasenaCliente"
              style={{width:'400px', margin:'0 auto'}}
              type="Password"
              className="form-controlj textbox-dgj"
              placeholder="Contraseña"
         
            
             
            />
             <br />
             <br />
          <button  class="myButton2" onClick={handleOnClickCliente} style={{position: 'relative', top: '0px', right: '-140px'}}>
            Registrarse
          </button>

        
      </TabPanel>
      
    </div>
    
  );
}
