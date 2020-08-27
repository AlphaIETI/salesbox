import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/registro/Register';
import AppHome from './components/home/AppHome';
import Carrito from "./components/Carrito/Carrito";
<<<<<<< HEAD
import Perfil from "./components/perfil/Perfil";
=======
import Dashboard from './components/dashboard/Dashboard';

>>>>>>> fc0a708a418dd1777ba9209384ad80e139546c5d

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
            <AppHome />
          </Route>
          <Route exact path="/ShopCar">
            <Carrito />
          </Route>
<<<<<<< HEAD
          <Route exact path="/Perfil">
            <Perfil />
=======
          <Route exact path="/Dashboard">
            <Dashboard />
>>>>>>> fc0a708a418dd1777ba9209384ad80e139546c5d
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
