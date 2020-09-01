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
import Dashboard from './components/dashboard/Dashboard';





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
          <Route exact path="/ShopCar">
            <Carrito />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
