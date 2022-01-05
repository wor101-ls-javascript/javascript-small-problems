/*
**Problem**
Write a function that takes a number as an argument. 
If the argument is a positive number, return the negative of that number. 
If the argument is a negative number, return it as-is.

**Examples / Test Cases**
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

**Data Structures**


**Algorithm**
*/

// function negative(int) {
//   let neg;
//   int < 0 ? neg = int : neg = int * -1;
//   return neg;
// }

function negative(int) {
  return Math.abs(int) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0