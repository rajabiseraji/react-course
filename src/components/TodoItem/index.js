import React, {Component} from 'react';

class TodoItem extends Component {

    render() {
        return (
            <div className="item">
                <span className="name">{this.props.todos}</span>
                <span className="priority"></span>
                <button className="button">Delete</button>
            </div>
        )
    }
}

