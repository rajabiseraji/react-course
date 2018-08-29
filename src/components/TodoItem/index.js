import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {

    render() {
        return (
            <div className="item">
                <span className="name">{this.props.todo.name}</span>
                <span className="priority">{this.props.todo.priority}</span>
                <button className="button">Delete</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object,
}

TodoItem.defaultProps = {
    todo: {},
}

export default TodoItem;

