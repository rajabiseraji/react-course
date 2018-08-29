import React, { Component } from 'react';
import { Card , Label, Input} from 'reactstrap';
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
      searchResults: [],
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

  renderSearchResults = () => {
    if(this.state.inputs.length === 0)
      return null;
    
    
    let todoItems =  this.state.searchResults.map((todo) => {
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
    tempInputs.sort(function (a, b) {
        if(a.priority === 'high' && b.priority !== 'high')
          return 1;
        else if(b.priority === 'high')
          return -1;
        

          return 0;
        
    })
    this.setState({
      inputs: tempInputs,
    });
  }

  searchInputHandler = (event) => {
    const searchQuery = event.target.value;
    let searchResults = this.state.inputs;
    searchResults = searchResults.filter(function (todo) {
      return todo.name.includes(searchQuery);
    });
    this.setState({
      searchResults: searchResults,
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
          <div className="m-2 p-2 card">
            <Label for="searchBox">Search</Label>
            <Input type="search" onInput={this.searchInputHandler} name="search" id="searchBox" placeholder="Search something ..." />
            {this.renderSearchResults()}
          </div>
          {this.renderTodoList()}
          -----------------
        </div>
      </div>
    );
  }
}

export default App;
