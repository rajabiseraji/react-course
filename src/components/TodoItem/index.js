import React, {Component} from 'react';
import {Badge} from 'reactstrap';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    render() {
        return (
            <div className="item">
                <Badge color="secondary" className="name mx-2">{this.props.todo.name}</Badge>
                <Badge color="secondary" className="priority mx-2">{this.props.todo.priority}</Badge>
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

