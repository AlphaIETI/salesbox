import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/registro/Register';
<<<<<<< HEAD
import Home from './components/home/Home';
import Carrito from "./components/Carrito/Carrito";
import Perfil from "./components/perfil/Perfil";
import Dashboard from './components/dashboard/Dashboard';
import Producto from './components/producto/Producto';
=======
import AppHome from './components/home/AppHome';
import ListaCarrito from "./components/Carrito/ListaCarrito";
import Perfil from "./components/perfil/Perfil";
import Dashboard from './components/dashboard/Dashboard';
import Carrito from "./components/Carrito/Carrito";

>>>>>>> 71e5d6cefc40a3ad39499acc97b183ed8be38012

function App() {
 

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/shopcar">
            <Carrito />
          </Route>
          <Route exact path="/carlist">
            <ListaCarrito />
          </Route>
          <Route exact path="/Perfil">
            <Perfil />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/Producto">
            <Producto />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
