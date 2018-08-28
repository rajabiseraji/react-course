import React, { Component } from 'react';
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
            inputValue: this.state.inputValue,
        }
        this.props.onAdd(values);
    }

    render() {
        return (
            <div className="card">
                <div className="first-line">
                    <input value={this.state.inputValue} onInput={this.handleInput} className="todo-input" />
                    <select value={this.state.priority} onChange={this.handleChange} className="priority">
                        <option value="high">High</option>
                        <option value="low">Low</option>
                    </select>
                    <button onClick={this.handleClick} className="button">Add</button>
                </div>
                {this.props.name}
                {/* {this.state.inputValue} - {this.state.priority} */}
            </div>
        )
    }
}

export default TodoList;