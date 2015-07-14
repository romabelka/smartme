var React = require('react/addons'),
    Todo = require('../models/Todo'),
    todoActions = require('../actions/todoActions');

var TodoItem = React.createClass({
    render: function() {
        return (
            <a href="#" onClick={this.handleClick}>{this.props.todo.text}</a>
        )
    },
    handleClick: function (ev) {
        ev.preventDefault();
        todoActions.deleteTodo(this.props.todo.id);
    }
});

module.exports = TodoItem;