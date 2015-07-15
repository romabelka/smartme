var React = require('react/addons'),
    Router = require('./Router'),
    Route = Router.Route,
    App = require('./Main.react'),
    Todos = require('./components/todos/Main.react.js'),
    Tags = require('./components/tags/Main.react.js');

var routes = (
    <Route handler={App}>
        <Route path="tags" handler={Tags} />
        <Route path="todos" handler={Todos} />
    </Route>
);


Router.run(routes, Router.HashLocation, function (Root) {
    React.render(<Root/>, document.getElementById('container'));
});