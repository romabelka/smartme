var Todo = function() {
    var idCounter = 1;
    return function (text) {
        this.text = text;
        this.id = idCounter;
        idCounter ++
    };
}();
module.exports = Todo;