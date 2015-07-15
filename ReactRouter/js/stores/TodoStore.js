var Store = require('./AbstractStore'),
    Todo = require('../models/Todo'),
    assign = require('object-assign'),
    mocks = require('./mocks'),
    AppDispatcher = require('../dispatcher/Dispatcher'),
    actionTypes = require('../dispatcher/constants');

function TodoStore() {
    Store.apply(this, arguments);
    mocks.forEach(function (todo) {
        this.createAndAdd(todo.text)
    }.bind(this));
    this.dispatchToken = AppDispatcher.register(function(action) {
        switch (action.actionType) {
            case actionTypes.ADD_TODO:
                todoStore.createAndAdd(action.data.text);
                todoStore.emitChange();
                break;
            case actionTypes.DELETE_TODO:
                todoStore.delete(action.data.id);
                todoStore.emitChange();
                break;
        }
    });
}

TodoStore.prototype = assign(Object.create(Store.prototype), {
    createAndAdd: function (text) {
        this.add(new Todo(text))
    }
    //some additional functionality
});

var todoStore = new TodoStore();

module.exports = todoStore;
