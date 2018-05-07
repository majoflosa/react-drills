import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['Gibson', 'Fender', 'Gretsch', 'PRS', 'Jackson', 'Yamaha'],
      filtered: [],
      userInput: ''
    };

    this.updateUserInput = this.updateUserInput.bind( this );
    this.displayList = this.displayList.bind( this );
  }

  updateUserInput(e){
    this.setState({ userInput: e.target.value });
    
    let filtered = this.state.list.filter( (item) => item.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) );
    if ( e.target.value !== '' ) {
      this.setState({ filtered: filtered });
    } else {
      this.setState({ filtered: this.state.list });
    }
  }

  displayList() {
    let display;

    if ( this.state.userInput === '' ) {
      display = this.state.list.map( (item, ind) => <h2 key={ind}>{item}</h2> );
    } else {
      display = this.state.filtered.map( (item, ind) => <h2 key={ind}>{item}</h2> );
    }

    return display;
  }
    
  render() {
    return (
      <div className="App">
        <input onChange={ this.updateUserInput } type="text"/>
        <div>{ this.displayList() }</div>
      </div>
    );
  }
}

export default App;
