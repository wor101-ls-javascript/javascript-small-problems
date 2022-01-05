/*
**Problem**
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, 
always starting with a '1'. 

The length of the string should match the given integer.

**Examples / Test Cases**
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

**Data Structures**
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

**Algorithm**
1. create return string
2. create for loop starting at index 1 and looping until equal to input integer
    - if current index is odd, add '1' to return string
    - else add '0' to return string
3. return string
*/

function stringy(int) {
  let newString = '';

  for (let index = 1; index <= int; index += 1) {
    if (index % 2 === 1) {
      newString += '1';
    } else {
      newString += '0';
    }
  }
  return newString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"