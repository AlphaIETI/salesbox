import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./App.css";
import {CredentialsList} from "./CredentialsList";
import logo from './logo.png';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Register} from "./Register";


export class Login extends React.Component {
  render() {
    const RegisterView = () => (
     <Register />
    );


    const LoginView = () => (
     <Login />
    );

    localStorage.setItem('usuario','prueba');
    localStorage.setItem('password','prueba');

    return (
    <Router>
      <div class="center">
         <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

        <form >

           <input
              id="usuario"
              type="text"
              class="form-control textbox-dg"
              placeholder="Usuario"

            />
            <br />
            <input
              id="password"
              type="Password"
              class="form-control textbox-dg"
              placeholder="Contraseña"


            />
             <br />
             <br />
          <button  class ="myButton" onClick={this.handleOnClick}>
            Login
          </button>
            <br />
            <br />
           <Link to="/register" >Registrate Ahora !</Link>

            <br />
            <p>
           </p>
          <div>
          <Route path="/register" component={RegisterView}/>


         </div>
        </form>
       </header>
         	<section class="social">

            			<a href="">
            				<i class="fas fa-at"></i>
            			</a>
            			<a href="">
            				<i class="fab fa-linkedin-in"></i>
            			</a>
            			<a href="">
            				<i class="fab fa-instagram"></i>
            			</a>
            </section>
      </div>
    </Router>


    );
  }

  handleOnClick(e){
   if(document.getElementById("usuario").value===localStorage.getItem("usuario") && document.getElementById("password").value===localStorage.getItem("password")){
      alert("Puede iniciar sesión");
   }else{
      alert("No está registardo");
   }

  }
}

