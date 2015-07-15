var React = require('react/addons');

var TagList = React.createClass({
    render: function() {
        var tags = this.props.todos.reduce(function (tags, todo) {
            var tag = todo.tag;
            if (tags.indexOf(tag) != -1) tags.push(tag);
            return tags
        }, []);
        var links = tags.map(function (tag) {

        });
        return (
            <ul>
                {links}
            </ul>
        )
    }
});

module.exports = TagList;