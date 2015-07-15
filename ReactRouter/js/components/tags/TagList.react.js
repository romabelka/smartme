var React = require('react/addons'),
    Link = require('../../Router').Link;

var TagList = React.createClass({
    render: function() {
        var tags = this.props.todos.reduce(function (tags, todo) {
            var tag = todo.tag;
            if (tags.indexOf(tag) == -1) tags.push(tag);
            return tags
        }, []);
        var links = tags.map(function (tag) {
            return <li key={tag}><Link to="tag" params={{tag: tag}}>{tag}</Link></li>
        });
        return (
            <ul>
                {links}
            </ul>
        )
    }
});

module.exports = TagList;