var React = require('react/addons'),
    todoStore = require('./stores/TodoStore'),
    RouteHandler = require('./Router').RouteHandler;

var App = React.createClass({
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
            <RouteHandler
                todos = {this.state.todos}
                />
        )
    }
});

module.exports = App;