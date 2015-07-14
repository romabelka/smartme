var React = require('react'),
    todoActions = require('../actions/todoActions');

var TodoForm = React.createClass({
    getInitialState: function () {
        return {
            text: ''
        }
    },
    render: function() {
        return (
            <form onSubmit={this.addTodo}>
                <input value={this.state.text} onChange={this.handleChange} placeholder="add new todo..."/>
                <input type="submit"/>
            </form>
        )
    },
    handleChange: function (ev) {
        this.setState({
            text: ev.target.value
        })
    },
    addTodo: function (ev) {
        ev.preventDefault();
        todoActions.addTodo(this.state.text);
        this.setState({
            text: ''
        })
    }
});

module.exports = TodoForm;