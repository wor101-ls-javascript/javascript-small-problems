// 1. What side effects are present in the foo function in the following code?

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

// mutates the argument passed as 'arr' with .pop
// calls the console.log method which is a side effect

// 2. Which of the following functions are pure functions?
// 1 - not pure
function sum(a, b) {
  console.log(a + b);
  return a + b;
}
// 2 - pure
function sum(a, b) {
  a + b;
}
// 3 - pure
function sum(a, b) {
  return a + b;
}
// 4 - not pure (calls random number generator)
function sum(a, b) {
  return a + b + Math.random();
}
// 5 - pure
function sum(a, b) {
  return 3.1415;
}