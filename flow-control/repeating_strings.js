
/*
**Problem**
Implement a function that takes a string and a number times as arguments. 
The function should return the string repeated times number of times. 
If times is not a number, return undefined. If it is a negative number, return undefined also. 
If times is 0, return an empty string. You may ignore the possibility that times is a number that isn't an integer.

You may concatenate strings, but you may not use any other properties or methods from JavaScript's built-in String class.

**Examples / Test Cases**
function repeat(string, times) {
  // …
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined

**Data Structures**


**Algorithm**
1. if times is not a typeof integer OR is less than 0 return undefined
2. create variable returnString and set to ''
3. create a for loop that iterates a number of times equal to the times parameter
  - on each iteration add the string to return string
4. return the returnString

*/

function repeat(string, times) {
  if (typeof times !== 'number' || times < 0) {
    return undefined;
  }

  let returnString = '';
  for (let index = 0; index < times; index += 1) {
    returnString += string;
  }

  return returnString;
}

console.log(repeat('abc', 1));
console.log(repeat('abc', 2));
console.log(repeat('abc', -1));
console.log(repeat('abc', 0));
console.log(repeat('abc', 'a'));
console.log(repeat('abc', false));
console.log(repeat('abc', null));
console.log(repeat('abc', '  '));