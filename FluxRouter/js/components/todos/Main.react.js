var React = require('react/addons'),
    todoStore = require('../../stores/TodoStore'),
    TodoForm = require('./TodoForm.react.js'),
    TodoList = require('./TodoList.react.js');

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
        var tag = this.props.params ? this.props.params.tag : undefined;
        return (
            <div>
                <TodoForm tag = {tag}/>
                <TodoList todos={this.state.todos} tag={tag}/>
            </div>
        )
    }
});

module.exports = MainApp;