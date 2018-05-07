import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: ['Gibson', 'Fender', 'Gretsch', 'PRS', 'Jackson', 'Yamaha']
    }

    this.showList = this.showList.bind( this );
  }

  showList( list ){
    var listItems = list.map( (item, ind) => {
      return <h2 key={ind}>{ item }</h2>;
    });

    return listItems;
  }

  render() {
    return (
      <div className="App">
        { this.showList( this.state.list ) }
      </div>
    );
  }
}

export default App;
