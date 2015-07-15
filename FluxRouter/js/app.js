var React = require('react/addons'),
    Router = require('./Router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    App = require('./Main.react'),
    Todos = require('./components/todos/Main.react.js'),
    Tag = require('./components/todos/TodoList.react'),
    Tags = require('./components/tags/TagList.react.js');

var routes = (
    <Route handler={App}>
        <Route path="tags" handler={Tags} />
        <Route name="tag" path="/tags/:tag" handler={Todos} />
        <Route path="todos" handler={Todos} />
        <DefaultRoute handler={Todos}/>
    </Route>
);


Router.run(routes, Router.HashLocation, function (Root) {
    React.render(<Root/>, document.getElementById('container'));
});