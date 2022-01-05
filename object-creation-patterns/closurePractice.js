// 1. Write a function named makeMultipleLister that, when invoked and passed a number, 
// returns a function that logs every positive integer multiple of that number less than 100. Usage looks like this:

// function makeMultipleLister(num1) {
//   return function() {
//     for (let i = num1; i < 100; i += num1) {
//       console.log(i);
//     }
//   }
// }

// let lister = makeMultipleLister(13);
// lister();

// 2. Write a program that uses two functions, add and subtract, to manipulate a running total value. 
// When you invoke either function with a number, it should add or subtract that number from the running total 
// and log the new total to the console. Usage looks like this:

let total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}

add(1);
add(42);
subtract(39);
add(6);