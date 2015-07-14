var React = require('react');

var TodoItem = React.createClass({
    render: function() {
        return (
            <a href="#" onClick={this.handleClick}>{this.props.todo.text}</a>
        )
    },
    handleClick: function (ev) {
        ev.preventDefault();
    }
});

module.exports = TodoItem;