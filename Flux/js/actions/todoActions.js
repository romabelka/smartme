var AppDispatcher = require('../dispatcher/Dispatcher'),
    actionTypes = require('../dispatcher/constants');

module.exports = {
    addTodo: function (text) {
        AppDispatcher.dispatch({
            actionType: actionTypes.ADD_TODO,
            data: {
                text: text
            }
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