var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

function Store() {
    var elements = [],
        curId = 1;
    this.getAll = function() {
        return elements;
    };

    this.getById = function(id) {
        return elements.filter(function (todo) {
            return todo.id == id;
        })[0]
    };

    this.add = function(element) {
        elements.push(assign({id: curId}, element));
        curId ++
    };

    this.delete = function (id) {
        var todo = this.getById(id);
        elements.splice(elements.indexOf(todo), 1);
    }
}

assign(Store.prototype, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

module.exports = Store;

