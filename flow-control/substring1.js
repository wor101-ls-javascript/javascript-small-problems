
/*
**Problem**
Write a function that returns a substring of a string based on a starting index and length.

  - The start argument is the starting index. 
    If negative, treat it as strLength + start where strLength is the length of the string. 
    For example, if start is -3, treat it as strLength - 3.

  - The length argument is the maximum length of the desired substring. 
    If length exceeds the number of characters available, just use the available characters.

**Examples / Test Cases**

function substr(string, start, length) {
  // …
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""

**Data Structures**


**Algorithm**
1. create return string variable
2. if start is less than 0, set equal to string length + start
3. iterate over string parameter using:
  - set index to 0
  - iterate until index is no longer less than length
  - add character at index + start of string parameter to the return string
4. return the returnString
*/

function substr(string, start, length) {
  let returnString = '';

  if (start < 0) {
    start = string.length + start;
  }

  for (let index = 0; index < length; index += 1) {
    let currentChar = string[index + start]
    if (currentChar === undefined) {
      break;
    } else {
      returnString += currentChar;
    }    
  }
  return returnString;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""