import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      tasks: []
    }

    this.updateInput = this.updateInput.bind( this );
    this.addTask = this.addTask.bind( this );
  }

  updateInput(e) {
    this.setState({ userInput: e.target.value });
  }

  addTask(e) {
    var updatedTasks = this.state.tasks.slice();

    updatedTasks.push( this.state.userInput );
    this.setState({ userInput: '', tasks: updatedTasks });
  }

  render() {
    let taskList = this.state.tasks.map( (task, ind) => <li key={ind}>{task}</li> );

    return (
      <div className="App">
        <h2>My to-do list</h2>
        <input onChange={ this.updateInput } value={ this.state.userInput } type="text"/>
        <button onClick={ e => this.addTask(e) }>Add task</button>
        <Todo
          taskList={ taskList }
        />
      </div>
    );
  }
}

export default App;
