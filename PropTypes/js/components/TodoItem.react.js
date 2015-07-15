var React = require('react/addons'),
    Todo = require('../models/Todo'),
    todoActions = require('../actions/todoActions');

var TodoItem = React.createClass({
    propTypes: {
//        todo: React.PropTypes.instanceOf(Todo)
        todo: React.PropTypes.shape({
            text: React.PropTypes.string.isRequired,
            estimate: React.PropTypes.number
        }).isRequired
    },
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