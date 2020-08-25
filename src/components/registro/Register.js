import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../../App.css";
import {CredentialsList} from "../../CredentialsList";
import logo from '../../logo.png';


export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={items:[{ nombre:"Juliana",  email:"Juliana@mail.com", direccion:"cra 1 #23-4",telefono :4234, fecha :new Date(2020,1,23), usuario:"julianagarzond" , password:"12345"}],
                         nombre:"",  email:"", direccion:"",telefono :"", usuario:"", password:""};
    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeDireccion = this.handleChangeDireccion.bind(this);
    this.handleChangeTelefono = this.handleChangeTelefono.bind(this);
    this.handleChangeFecha = this.handleChangeFecha.bind(this);
    this.handleChangeUsuario = this.handleChangeUsuario.bind(this);
    this.handleChangeContrasena = this.handleChangeContrasena.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div class="center">
         <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            class="form-control textbox-dg"
            placeholder="Nombre"
            onChange={this.handleChangeNombre}
            value={this.state.nombre}
           />
          <br />
          <input
            type="email"
            class="form-control textbox-dg"
            placeholder="Email"
            onChange={this.handleChangeEmail}
            value={this.state.email}
          />
          <br />
          <input
            type="text"
            class="form-control textbox-dg"
            placeholder="Dirección"
            onChange={this.handleChangeDireccion}
            value={this.state.direccion}
          />
          <br />
          <input
             type="number"
             class="form-control textbox-dg"
             placeholder="Telefono"
             onChange={this.handleChangeTelefono}
             value={this.state.telefono}
          />
           <br />
           <input
              type="date"
              class="form-control textbox-dg"
              placeholder="Fecha de nacimiento"
              onChange={this.handleChangeFecha}
              value={this.state.fecha}
            />
           <br />
           <input
              type="text"
              class="form-control textbox-dg"
              placeholder="Usuario"
              onChange={this.handleChangeUsuario}
              value={this.state.usuario}
            />
            <br />
            <input
              type="Password"
              class="form-control textbox-dg"
              placeholder="Contraseña"
              onChange={this.handleChangeContrasena}
              value={this.state.contrasena}
            />
             <br />
             <br />
          <button  class ="myButton">
            Registrarse
          </button>

            <br />
            <p>
           <CredentialsList todoList={this.state.items} />
           </p>

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


    );
  }

  handleChangeNombre(e) {
    this.setState({ nombre: e.target.value });
  }

  handleChangeEmail(e) {
      this.setState({ email: e.target.value });
    }

  handleChangeDireccion(e) {
        this.setState({ direccion: e.target.value });
   }
  handleChangeTelefono(e) {
         this.setState({ telefono: e.target.value });
   }

   handleChangeFecha(e) {
            this.setState({ fecha: e.target.value });
   }

   handleChangeUsuario(e) {
            this.setState({ usuario: e.target.value });
   }

   handleChangeContrasena(e) {
            this.setState({ contrasena: e.target.value });
      }



  handleSubmit(e) {

    e.preventDefault();
    if (!this.state.nombre.length) {
      return;
    }
    const newItem = {
      nombre:this.state.nombre,
      email: this.state.email,
      direccion: this.state.direccion,
      telefono: this.state.telefono,
      fecha : this.state.fecha,
      usuario: this.state.usuario,
      password :this.state.password

    };

    alert('Nuevo usuario'+ newItem.usuario);

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      nombre: '', email:"", direccion:"", telefono: "" ,fecha:"", usuario:"",contrasena:""
    }));
  }
}