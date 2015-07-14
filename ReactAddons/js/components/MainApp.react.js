var React = require('react'),
    todoStore = require('../stores/TodoStore'),
    TodoList = require('./TodoList.react');

var MainApp = React.createClass({
    getInitialState: function () {
        return {
            todos: todoStore.getAll()
        }
    },
    componentDidMount: function() {
        todoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        todoStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({
            todos: todoStore.getAll()
        })
    },
    render: function() {
        return (
            <TodoList todos={this.state.todos} />
        )
    }
});

module.exports = MainApp;