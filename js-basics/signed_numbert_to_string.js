/*
**Problem**
In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. 
In this exercise, you're going to extend that function by adding the ability to represent negative numbers.

You may not use any of the standard conversion functions available in JavaScript, such as String(), 
Number.prototype.toString, or an expression such as '' + number. You may, however, use the integerToString function from the previous exercise.

**Examples / Test Cases**
signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"

**Data Structures**


**Algorithm**
*/

function integerToString(int) {
  let string = '';

  while (int >= 1) {
    string = (int % 10) + string;
    int = Math.floor(int / 10);
  }

  return string;
}

function signedIntegerToString(int) {
  if (int > 0) {
    return `+${integerToString(int)}`;
  } else if (int < 0) {
    let nonNeg = int * -1;
    return `-${integerToString(nonNeg)}`;
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"