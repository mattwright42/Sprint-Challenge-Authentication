import React, { Component } from 'react';
import axios from 'axios';

const initialUser = {
  username: '',
  password: ''
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: '',
      signedIn: false
    };
  }

  render() {
    if (this.state.signedIn === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>SIGN IN</h1>
        <form onSubmit={this.signIn}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.value}
            onChange={this.changeHandler}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.value}
            onChange={this.changeHandler}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
