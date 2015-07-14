var React = require('react'),
    todos = require('./mocks'),
    TodoList = require('./components/TodoList.react');

React.render(<TodoList todos={todos} />, document.getElementById('container'));
