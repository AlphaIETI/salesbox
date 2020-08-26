import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Register } from './components/registro/Register';
import Login from './components/login/Login';
import RegisterViews from './components/registro/RegisterViews';

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
          <Route exact path="/RegisterView">
            <RegisterViews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
