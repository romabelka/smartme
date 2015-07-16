var React = require('react/addons'),
    todoActions = require('../actions/todoActions');

var TodoForm = React.createClass({
    getInitialState: function () {
        return {
            text: ''
        }
    },
    handleChange: function (ev) {
        this.setState({
            text: ev.target.value
        })
    },
    render: function() {
        return (
            <form onSubmit={this.addTodo}>
                <input value={this.state.text} onChange={this.handleChange} placeholder="add new todo..."/>
                <input type="submit"/>
            </form>
        )
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