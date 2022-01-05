/*
**Problem**
In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 
In this exercise and the next, you're going to reverse those functions.

You will learn more about converting strings to numbers by writing a function that takes a positive integer or zero, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String(), 
Number.prototype.toString, or an expression such as '' + number. 
Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

**Examples / Test Cases**
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"

**Data Structures**


**Algorithm**
1. determine number size
  - start with divisor set at 1
  - loop with index at 1 until remainder less than 1
    - use index to increase 10 ** index
    - when remainder less than 1 set the divisor to 10 ** index

2. loop until divisor is less than or equal to 1??
  - use parseInt() to get integer
  - use object with integers as keys and letters as values to find correct letter
  - add letter to return string
*/

// const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(int) {
//   let divisor = 1;

//   for (let index = 0; ; index += 1) {
//     if ((int / divisor) < 1 || int < 10) {
//       break;
//     } else {
//       divisor = 10 ** index;
//     }
//   }
//   divisor /= 10;

//   let intString = '';
//   for (let index = divisor; index >= 1; index /= 10) {
//     let currentInt = Math.floor(int / index);
//     intString += digits[currentInt];
//     int -= (currentInt * index);
//   }
//   if (intString === '') {
//     return '0';
//   } else {
//     return intString;
//   }
  
// }


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"

// LS solution
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}