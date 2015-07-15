var React = require('react/addons'),
    todoActions = require('../../actions/todoActions');

var TodoForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
        return {
            text: ''
        }
    },
    render: function() {
        return (
            <form onSubmit={this.addTodo}>
                <input valueLink={this.linkState('text')} placeholder="add new todo..."/>
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