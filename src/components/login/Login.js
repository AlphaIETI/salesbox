import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../../App.css";
import {CredentialsList} from "../../CredentialsList";
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import { Register } from "../registro/Register";



export default function Login (){
  

    localStorage.setItem('usuario','prueba');
    localStorage.setItem('password','prueba');
    const handleOnClick=(e) =>{
      if(document.getElementById("usuario").value===localStorage.getItem("usuario") && document.getElementById("password").value===localStorage.getItem("password")){
         alert("Puede iniciar sesión");
      }else{
         alert("No está registardo");
      }
   
     };

    return (
    
      <div class="center">
         <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

        <form >

           <input
              id="usuario"
              type="text"
              className="form-control textbox-dg"
              placeholder="Usuario"

            />
            <br />
            <input
              id="password"
              type="Password"
              className="form-control textbox-dg"
              placeholder="Contraseña"


            />
             <br />
             <br />
          <button  className ="myButton" onClick={handleOnClick}>
            Login
          </button>
            <br />
            <br />
           <Link to="/Register" >Registrate Ahora !</Link>

            <br />
            <p>
           </p>
          <div>
        


         </div>
        </form>
       </header>
         	<section class="social">

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

