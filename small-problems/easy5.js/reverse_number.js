/*
**Problem**
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.


**Examples / Test Cases**
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1

**Data Structures**
- input an integer
- output an interger

**Algorithm**
1. turn input integer into a string and split it into an array
2. reverse the array
4. join the array
5. parseInt on the new string and return

*/

function reverseNumber(int) {
  let numArray = String(int).split('');
  numArray.reverse();
  return parseInt(numArray.join(''), 10);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1