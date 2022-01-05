/*
**Problem**

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

// What will the following code snippets log?
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}
// will log: The total value is 15


// Code snippet 2
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
// Logs: The total value is NaN



// Code snippet 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
// Logs: The total value is 15


// Code snippet 4
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// syntax error as you CANNOT declarea a let or const variable more than once. Var varibales CAN be declared more than once