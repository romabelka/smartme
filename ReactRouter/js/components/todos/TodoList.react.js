var React = require('react/addons'),
    TodoItem = require('./TodoItem.react.js'),
    CSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
    render: function() {
        var todos = this.props.params ? this.props.todos.filter(function (todo) {
            return todo.tag == this.props.params.tag
        }.bind(this)) : this.props.todos;

        var todoItems = todos.map(function (todo) {
            return <li key={todo.id}><TodoItem todo={todo}/></li>
        });
        return (
            <CSSTransitionGroup transitionName="list" component="ul" transitionAppear={true}>
                {todoItems}
            </CSSTransitionGroup>
        )
    }
});

module.exports = TodoList;