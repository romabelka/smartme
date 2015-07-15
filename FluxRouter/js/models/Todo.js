var Todo = function() {
    var idCounter = 1;
    return function (data) {
        this.text = data.text;
        this.tag = data.tag;
        this.id = idCounter;
        idCounter ++
    };
}();
module.exports = Todo;