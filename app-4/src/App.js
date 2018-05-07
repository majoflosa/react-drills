import React, { Component } from 'react';
import './App.css';
import Login from './Login';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.updateUser = this.updateUser.bind( this );
    this.updatePassword = this.updatePassword.bind( this );
    this.submitLogin = this.submitLogin.bind( this );
  }

  updateUser(e) {
    this.setState({ username: e.target.value });
  }
  
  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  submitLogin() {
    alert( 'Username: ' + this.state.username + ' Password: ' + this.state.password );
  }

  render() {
    return (
      <div className="App">
        <Login
          updateUser={ this.updateUser }
          updatePassword={ this.updatePassword }
          submitLogin={ this.submitLogin }
        />
      </div>
    );
  }
}

export default App;
