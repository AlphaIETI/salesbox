import React, { useState } from "react";
import "../../App.css";
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

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
    
      <div className="center">
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
         <Link to='/Home'>
          <button  className ="myButton" onClick={handleOnClick}>
            Login
          </button>
          </Link>
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

