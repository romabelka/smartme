var React = require('react/addons'),
    tagStore = require('../../stores/TagStore'),
    Link = require('../../Router').Link;

var TagList = React.createClass({
    getInitialState: function () {
        return {
            tags: tagStore.getAll()
        }
    },
    componentDidMount: function() {
        tagStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        tagStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({
            tags: tagStore.getAll()
        })
    },
    render: function() {
        var links = this.state.tags.map(function (tag) {
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