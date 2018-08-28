import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/index';
import TodoItem from './components/TodoItem/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
    }
  }

  addHandler = (obj) => {
    let tempInputs = this.state.inputs;
    tempInputs.push(obj);
    this.setState({
      inputs: tempInputs,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body">
          <TodoList onAdd={this.addHandler} name="I'm a prop" />
        </div>
        <TodoItem todos={this.state.inputs} />
      </div>
    );
  }
}

export default App;
