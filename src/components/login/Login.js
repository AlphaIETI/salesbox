import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from '../../logo.png';
import { Redirect, Route } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

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

export default function Login() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const[url,setUrl]= useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[isEntity, setIsEntity]= useState(false);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const responseGoogleTrue = (response) =>{
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    alert("Puede iniciar sesión");
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn',true);
    window.location='/Home';
  };
  
  const responseGoogleFalse = (response) =>{
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    alert("No está registrado");
  };

  const handleOnClickClient = () => {
    if (document.getElementById("email").value === ""
    || document.getElementById("contrasenaCliente").value === ""
    ){
      alert("Alguno de los campos esta vacio")
    }
    else{
      let client =
          {email:document.getElementById("email").value, password:document.getElementById("contrasenaCliente").value}
      loginClient(client);

    }
    };

  const handleOnClickEntity=() =>{
    let entity={email:document.getElementById("emailEmpresa").value, password:document.getElementById("contrasenaEmpresa").value}
    loginEntity(entity);
    alert("");
    /*if(document.getElementById("usuario").value===localStorage.getItem("usuario") && document.getElementById("password").value===localStorage.getItem("password")){
       alert("Puede iniciar sesión");
       setIsLoggedIn(true);
       localStorage.setItem('isLoggedIn',true);
    }else if(document.getElementById("usuario").value==="nike" && document.getElementById("password").value==="nike"){
      alert("Puede iniciar sesión");
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn',true);
      localStorage.setItem('isAdmin',true);
    }else{
       alert("No está registrado");
    }*/
   };


  const loginEntity = (entity) => {
  

    fetch('https://salesbox-alpha-backend.herokuapp.com/api/entity/user/'+entity.email+'/'+entity.password,{
      method: 'GET'
    }).then(function (response) {
      if (response.ok) {
        response.json().then(function (res) {
          console.log(res);
          localStorage.setItem('isAdmin',true);
          localStorage.setItem('nameEntity',res.name);
          localStorage.setItem('isLoggedIn',true);
          setIsLoggedIn(true);
        })
      } else {
        console.log("");
        alert("Usuario o Contraseña Incorrecto");
      }
    }).catch(function (error) {
      console.log("Bad petition:" + error.message);
     
    });

  }

  const loginClient = (client)=>{
    fetch('https://salesbox-alpha-backend.herokuapp.com/clients/email/'+client.email,{
    //fetch('http://localhost:8080/clients/email/'+client.email,{
      method: 'GET'
    }).then(function(response){
      //console.log(response.ok)
     if (response.ok){

       response.json().then(function (res) {

         //localStorage.setItem(,true);
         if(client.email === res.email && client.password === res.password){
           
           localStorage.setItem('isLoggedIn',true);
           localStorage.setItem('emailClient',res.email);
           window.location='/Home';
           setIsLoggedIn(true);
         }
     });
     }
     else{
       console.log("");

       alert("Usuario o Contraseña Incorrecto");
     }
    }).catch(function (error) {

      console.log("Bad petition:" + error.message);

    });
  }



  return (


    <div className={classes.root} style={{ width: '480px', margin: '0 auto' }}>
      <AppBar position="static" style={{ width: '480px', margin: '0 auto', background: 'transparent' }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
          <Tab label={<span style={{ color: 'black' }}>Empresa</span>} {...a11yProps(0)} />
          <Tab label={<span style={{ color: 'black' }}>Cliente</span>} {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      {isLoggedIn && localStorage.getItem('isAdmin')?
          <div>
          <Route>
            <Redirect to={{pathname:'/Dashboard',state:{isEntity:true}}}>
            </Redirect>
          </Route>
          </div>
          :
          null
      }
      <TabPanel value={value} index={0} >


        <img src={logo} alt="logo" style={{ height: '150px', position: 'relative', top: '0px', right: '-100px' }} />



        <input
          id="emailEmpresa"
          style={{ width: '400px', margin: '0 auto' }}
          type="email"
          className="form-controlj textbox-dgj"
          placeholder="Email"


        />
        <br />
        <br />
        
        <input
          id="contrasenaEmpresa"
          style={{ width: '400px', margin: '0 auto' }}
          type="Password"
          className="form-controlj textbox-dgj"
          placeholder="Contraseña"

        />
        <br />
        <br />
        <button className="myButton2" onClick={handleOnClickEntity} style={{ position: 'relative', top: '0px', right: '-140px' }}>
         Iniciar  Sesión
          </button>
        <br>
        </br>
        <br></br>

          <Link to="/Register"  style={{color:"grey" ,position: 'relative', top: '0px', right: '-130px' }}>Haz click para registrarte</Link>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src={logo} style={{ height: '150px', position: 'relative', top: '0px', right: '-100px' }} />

        
        <input
          id="email"
          style={{ width: '400px', margin: '0 auto' }}
          type="email"
          className="form-controlj textbox-dgj"
          placeholder="Email"



        />
        <br />
        <br />
        <input
          id="contrasenaCliente"
          style={{ width: '400px', margin: '0 auto' }}
          type="Password"
          className="form-controlj textbox-dgj"
          placeholder="Contraseña"



        />
        <br />
        <br />
        <button className="myButton2" onClick={handleOnClickClient} style={{ position: 'relative', top: '0px', right: '-140px' }}>
          Iniciar Sesión
          </button>
        <br>
        </br>
        <br>
        </br>
        <Link to="/Register"  style={{color:"grey" ,position: 'relative', top: '0px', right: '-130px' }}>Haz click para registrarte</Link>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
          <GoogleLogin 
            
            clientId="262410189500-9m36t0v9h1fuat5chk5ft7ttdlp9quk8.apps.googleusercontent.com"
            onSuccess={responseGoogleTrue}
            onFailure={responseGoogleFalse}
            cookiePolicy={'single_host_origin'}
          
           


        />

      </TabPanel>

    </div>

  );
}
