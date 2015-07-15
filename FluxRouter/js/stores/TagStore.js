var Store = require('./AbstractStore'),
    assign = require('object-assign'),
    mocks = require('./tagMocks'),
    AppDispatcher = require('../dispatcher/Dispatcher'),
    actionTypes = require('../dispatcher/constants');

function TagStore() {
    Store.apply(this, arguments);
    mocks.forEach(function (todo) {
        this.add(todo)
    }.bind(this));
}

TagStore.prototype = assign(Object.create(Store.prototype), {
    //some additional functionality
});

var tagStore = new TagStore();

module.exports = tagStore;
