import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: 'This is the default text.'
    };

    this.updateUserInput = this.updateUserInput.bind( this );
  }

  updateUserInput( e ) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    return (
      <div className="app-wrap">
        <input onChange={ this.updateUserInput } type="text" />
        <h3>{ this.state.userInput }</h3>
      </div>
    );
  }
}

export default App;
