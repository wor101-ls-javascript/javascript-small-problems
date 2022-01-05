/*
**Problem**
Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

**Examples / Test Cases**
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

**Data Structures**


**Algorithm**
*/

function sequence(int) {
  let seqArray = [];

  for (let index = 1; index <= int; index += 1) {
    seqArray.push(index);
  }
  return seqArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]