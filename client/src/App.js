import React, { Component } from 'react';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import Register from './components/Register';
import SignIn from './components/SignIn';
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
          <NavLink to="/signin">SIGN IN</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" render={props => <DadJokes {...props} />} />
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="signin" render={props => <SignIn {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
