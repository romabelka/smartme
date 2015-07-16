var immutable = require('immutable');


var a = immutable.map({
    val: 1
});

var b = a.set('val', 2);

console.log('---', a.get('val')); // # 1
console.log('---', b.get('val')); // # 2

console.log('---', a == b); // # true

function pureSum(a,b) {
    return a + b
}

function sum (a, b) {
    alert(a + b)
}

var c;

function unpureSum (a) {
    return c + a
}

function oneMoreUnpureSum(a,b) {
    c = a + b
}

//------

function Todo(text, priority, id) {
    this.text = text;
    this.priority = priority;
    this.id = id ? id : generateID()
}

Todo.prototype.setText = function(text) {
    return this.text == text ? this : new Todo(text, this.priority, id)
};