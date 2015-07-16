var React = require('react/addons'),
    TodoItem = require('./TodoItem.react'),
    CSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
    render: function() {
        var todoItems = this.props.todos.map(function (todo) {
            return <li key={todo.id}><TodoItem todo={todo}/></li>
        });
        return (
            <ul>
                {todoItems}
            </ul>
        )
    }
});

module.exports = TodoList;