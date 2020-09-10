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
import Favorites from "./components/Favorites/Favorites";
import Carrusel from './components/producto/Carrusel';
import Coupons from './components/Coupons/Coupons';
import EstadoPedido from './components/estadoPedido/EstadoPedido';


function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
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
          <Route exact path="/Shopcar">
            <Carrito />
          </Route>
          <Route exact path="/Favorites">
            <Favorites />
          </Route>
          <Route exact path="/Perfil">
            <Perfil />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/Carrusel">
            <Carrusel />
          </Route>
          <Route exact path="/Coupons">
            <Coupons />
          </Route>
          <Route exact path="/EstadoPedido">
            <EstadoPedido />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
