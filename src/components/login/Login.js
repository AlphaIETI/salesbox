import React, { useState } from "react";
import "../../App.css";
import logo from '../../logo.png';
import { Link ,Redirect,Route} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Home from "../home/Home";


 
export default function Login (){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const[url,setUrl]= useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
   const responseGoogle = (response) =>{
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    window.location='/Home';
    
  };
 
  

    localStorage.setItem('usuario','prueba');
    localStorage.setItem('password','prueba');
 
    const handleOnClick=(e) =>{
      if(document.getElementById("usuario").value===localStorage.getItem("usuario") && document.getElementById("password").value===localStorage.getItem("password")){
         alert("Puede iniciar sesión");
         setIsLoggedIn(true);
         localStorage.setItem('isLoggedIn',true);
      }else if(document.getElementById("usuario").value==="admin" && document.getElementById("password").value==="admin"){
        alert("Puede iniciar sesión");
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn',true);
        localStorage.setItem('isAdmin',true);
      }else{
         alert("No está registardo");
      }
     };
    return (
    
      <div className="centerj">
         <header className="App-headerj">
                <img src={logo} className="App-logoj" alt="logo" />

        <form >

           <input
              id="usuario"
              type="text"
              className="form-controlj textbox-dgj"
              placeholder="Usuario"

            />
            <br />
            <input
              id="password"
              type="Password"
              className="form-controlj textbox-dgj"
              placeholder="Contraseña"
            />
             <br />
             <br />
          <button  className ="myButtonj" onClick={handleOnClick}>
            Login
          </button>
          <br></br>
          <br></br>

          {isLoggedIn ?
            <div>
            <Route>
              <Redirect to='/Home'>
              </Redirect>
            </Route>
            </div>
            :
            null
          }
          

       
          <GoogleLogin 
            
            clientId="262410189500-9m36t0v9h1fuat5chk5ft7ttdlp9quk8.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          
           


        />
        
                 

      
          <br />
             <br />
            <br />
            <br />
           <Link to="/Register"  style={{color:"grey"}}>Haz click para registrarte</Link>
            <br />
            <p>
           </p>
          <div>
         </div>
        
        </form>
       </header>
         	<section className="social">

            			<a href="">
            				<i className="fas fa-at"></i>
            			</a>
            			<a href="">
            				<i className="fab fa-linkedin-in"></i>
            			</a>
            			<a href="">
            				<i className="fab fa-instagram"></i>
            			</a>
            </section>
      </div>
  


    );
  

  
}

