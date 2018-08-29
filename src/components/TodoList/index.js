import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import './style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'test',
            priority: 'low',
        };
    }

    handleInput = (event) => {
        this.setState({
            inputValue: event.target.value,
        });
    }

    handleChange = (event) => {
        this.setState({
            priority: event.target.value,
        });
    }

    handleClick = () => {
        const values = {
            priority: this.state.priority,
            name: this.state.inputValue,
        }
        this.props.onAdd(values);
    }

    render() {
        return (
            <div className="card p-5">
                <div className="first-line row">
                    <Input value={this.state.inputValue} onInput={this.handleInput} className="todo-input mr-1 col-sm-6" />
                    <Input type="select" 
                           value={this.state.priority} 
                           onChange={this.handleChange} 
                           className="priority mr-1 col-sm-2">
                        <option value="high">High</option>
                        <option value="low">Low</option>
                    </Input>
                    <Button color="success" onClick={this.handleClick} className="col-sm-3">Add</Button>
                </div>
                {this.props.name}
                {/* {this.state.inputValue} - {this.state.priority} */}
            </div>
        )
    }
}

export default TodoList;