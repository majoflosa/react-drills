import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  constructor() {
    super();

    this.state = { imageSrc: "http://via.placeholder.com/350x150" }
  }
  render() {
    return (
      <div className="App">
        <Image 
          imageSrc={ this.state.imageSrc }
        />
      </div>
    );
  }
}

export default App;
