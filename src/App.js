import React, { Component } from 'react';
import {Card} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/index';
import TodoItem from './components/TodoItem/index';
import Timer from './components/Timer/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
    }
  }

  renderSomething = () => {
    return (
      <div>Hello World</div>
    )
  }

  renderTodoList = () => {
    if(this.state.inputs.length === 0)
      return null;
    
    
    let todoItems =  this.state.inputs.map((todo) => {
      return (
        <TodoItem key={todo.name} todo={todo} />
      );
    });
    return (
      <Card className="p-2 m-5 w-50"> 
        {todoItems}
      </Card>
    )
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
        <div className="App-body d-flex align-items-center flex-column mt-3">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <TodoList onAdd={this.addHandler} name="I'm a prop" />
            </div>
          </div>
          {this.renderTodoList()}
          <Timer time="10" />
        </div>
      </div>
    );
  }
}

export default App;
