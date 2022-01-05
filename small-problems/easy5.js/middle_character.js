/*
**Problem**
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
If the string has an odd length, you should return exactly one character. 
If the string has an even length, you should return exactly two characters.

**Examples / Test Cases**
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

**Data Structures**


**Algorithm**
1. get length of input string
2. if an odd length
  - divide length by two and send it to the floor
  - return character at that index
3. if even length
  - divide length by two for end of midpoint
  - return character at 1 before end of midpoint and midpoint character
*/

function centerOf(string) {
  let length = string.length;

  if (length % 2 === 1) {    
    return string[Math.floor(length / 2)] ;
  } else {
    return string[Math.floor(length / 2) - 1] + string[Math.floor(length / 2)]; 
  }

}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"