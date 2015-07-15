var AppDispatcher = require('../dispatcher/Dispatcher'),
    actionTypes = require('../dispatcher/constants');

module.exports = {
    addTodo: function (todo) {
        AppDispatcher.dispatch({
            actionType: actionTypes.ADD_TODO,
            data: todo
        });
    },
    deleteTodo: function (id) {
        AppDispatcher.dispatch({
            actionType: actionTypes.DELETE_TODO,
            data: {
                id: id
            }
        });
    }
};