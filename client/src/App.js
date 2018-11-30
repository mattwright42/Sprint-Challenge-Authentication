import React, { Component } from 'react';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import DadJokes from './components/DadJokes';

import './App.css';

class App extends Component {
  render() {
    const token = localStorage.getItem('token');
    return (
      <div>
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/register">REGISTER</NavLink>
          <NavLink to="/login">LOGIN</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" render={props => <DadJokes {...props} />} />
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="login" render={props => <Login {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
