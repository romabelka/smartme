var React = require('react'),
    TodoItem = require('./TodoItem.react');

var TodoList = React.createClass({
    render: function() {
        var todoItems = this.props.todos.map(function (todo) {
            return <li><TodoItem todo={todo}/></li>
        });
        return (
            <ul>
                {todoItems}
            </ul>
        )
    }
});

module.exports = TodoList