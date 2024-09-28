var message = 'Hello Typescript';
var isFetching = true;
var isLoading = false;
var int = 45;
var float = 4.2;
var num = 3e10;
var numberArrayFirst = [1, 1, 2, 3, 5, 8, 13, 21];
var numberArraySecond = [1, 1, 2, 3, 5];
var words = ['Hello', 'Typescripts'];
// Tuple
var contact = ['Vlad', 123123];
// Any
var variable = 42;
variable = [];
variable = 'new value';
console.log(message);
console.log(words);
// =====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Vlad');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = "1234";
