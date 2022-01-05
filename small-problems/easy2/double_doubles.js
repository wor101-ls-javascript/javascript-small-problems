/*
**Problem**
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; otherwise, return the double number as-is.

**Examples / Test Cases**
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

**Data Structures**


**Algorithm**
1. turn input integer into string
2. find length of string
3. if length is odd return input integer * 2
4. use .slice() method to divide string into two equal length strings 
5. if strings are equal to each other than return input integer
6. otherwise return input integer * 2
*/

function twice(int) {
  let stringInt = int.toString();
  let length = stringInt.length;
  let string1 = stringInt.slice(0, (length / 2) );
  let string2 = stringInt.slice((length / 2), length);

  if (string1 === string2) {
    return int;
  } else {
    return int * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676