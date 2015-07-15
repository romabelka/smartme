var React = require('react/addons'),
    todoStore = require('./stores/TodoStore'),
    RouteHandler = require('./Router').RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Todo App</h1>
                <RouteHandler />
            </div>
        )
    }
});

module.exports = App;