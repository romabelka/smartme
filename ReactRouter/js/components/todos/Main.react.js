var React = require('react/addons'),
    TodoForm = require('./TodoForm.react.js'),
    TodoList = require('./TodoList.react.js');

var MainApp = React.createClass({
    render: function() {
        return (
            <div>
                <TodoForm />
                <TodoList todos={this.props.todos} />
            </div>
        )
    }
});

module.exports = MainApp;