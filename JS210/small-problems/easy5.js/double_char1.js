/*
**Problem**
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.


**Examples / Test Cases**
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

**Data Structures**


**Algorithm**
1. create a new string to be returned
2. iterate over the current string
  - on each character add it to the new string twice
3. return new string
*/

function repeater(string) {
  let repeatString = '';

  for (let index = 0; index < string.length; index += 1) {
    repeatString += string[index];
    repeatString += string[index];
  }

  return repeatString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""