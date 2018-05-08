import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import List from './List';
import NewTask from './NewTask';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      tasks: []
    };

    this.updateInput = this.updateInput.bind( this );
    this.addTask = this.addTask.bind( this );
  }

  updateInput(e) {
    this.setState({ userInput: e.target.value });
  }

  addTask() {
    let updatedTasks = this.state.tasks;
    updatedTasks.push( this.state.userInput );

    this.setState({ userInput: '', tasks: updatedTasks });
  }

  render() {
    return (
      <div className="App">
        <h2>My to-do list:</h2>
        <input onChange={ this.updateInput } value={ this.state.userInput } type="text"/>
        <NewTask addTask={ this.addTask } />
        <List tasks={ this.state.tasks } />
      </div>
    );
  }
}

export default App;
