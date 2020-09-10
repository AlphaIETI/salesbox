import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/registro/Register';
import Home from './components/home/Home';
import Carrito from "./components/Carrito/Carrito";
import Perfil from "./components/perfil/Perfil";
import Dashboard from './components/dashboard/Dashboard';
import Producto from './components/producto/Producto';
import ListaCarrito from "./components/Carrito/ListaCarrito";
import Coupons from './components/Coupons/Coupons';


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
          <Route exact path="/Coupons">
            <Coupons />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
