
/*
**Problem**
Write a function that takes two arguments:

a string to be split
a delimiter character
The function logs the split strings to the console, as shown below:

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. 
However, you may not use any other properties or methods from JavaScript's built-in String class.

- a delimeter must be passed as an argument to the mehod or an 'ERROR: No delimeter' message is logged to console
- is a delimeter must be one character or absence of a character ?


**Examples / Test Cases**
function splitString(string, delimiter) {
  // …
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

**Data Structures**


**Algorithm**
1. create variables
  - determine length of the input string
  - create variable to hold start position and set to 0
1a. Pre-loop catches
  - if no argument passed for delimeter through an error
  - if delimeter is an empty string, log each character of input string one at a time
2. create a for loop that iterates over the characters in the input string using the length of the string
  - on each loop check the current character to see if it is equal to the delimeter
  - if equal to the delimeter 
    - then save current index position
    - log to console string from start position to current index position
    - update the start position to the current index position and continue loop
  - if current index equals the last index position of the input string 
    - print input string from start position to last index position
*/

function splitString(string, delimeter) {
  console.log('logs:');

  let length = string.length;
  if (delimeter === undefined) {
    console.log('ERROR: No delimeter');
    return;
  } else if (delimeter === '') {
    for (let index = 0; index < length; index += 1) {
      console.log(string[index]);
    }
    return;
  }

  let currentString = ''
  for (let index = 0; index < length; index += 1) {
    if (string[index] === delimeter) {
      console.log(currentString);
      currentString = '';
    } else {
      currentString += string[index];
      if (index === length - 1) {
        console.log(currentString);
      }
    }
  }

}

splitString('hello');
console.log('');
splitString('hello', '');
console.log('');
splitString('abc,123,hello world', ',');
console.log('');
splitString('hello', ';');
console.log('');
splitString(';hello;', ';');
