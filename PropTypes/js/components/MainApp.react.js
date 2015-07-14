var React = require('react/addons'),
    todoStore = require('../stores/TodoStore'),
    TodoForm = require('./TodoForm.react'),
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
            <div>
                <TodoForm />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
});

module.exports = MainApp;