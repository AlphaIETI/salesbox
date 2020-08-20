import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./App.css";
import {CredentialsList} from "./CredentialsList";
import logo from './logo.png';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{email:"", password:""}],
                                      email:'', password:''};
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
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
            placeholder="Username"
            onChange={this.handleChangeText}
            value={this.state.email}
          />
           <br />
           <input
                type="Password"
                 class="form-control textbox-dg"
                  placeholder="Password"

              onChange={this.handleChangePriority}
              value={this.state.password}
            />

             <br />
             <br />

          <button class ="myButton">
            Login
          </button>
           <CredentialsList todoList={this.state.items} />

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

  handleChangeText(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePriority(e) {
      this.setState({ password: e.target.value });
    }

  handleSubmit(e) {

    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      email: this.state.email,
      password :this.state.password,

    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      //this.state.items.push(newItem);
      text: ''
    }));
  }
}