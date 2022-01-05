
/*
**Problem**
Write a function that takes a string as an argument, 
and returns the string stripped of spaces from both ends. 

Do not remove or alter internal spaces.

You may use the square brackets ([]) to access a character by index (as shown below), 
and the length property to find the string length. 

However, you may not use any other properties or methods from JavaScript's built-in String class.

**Examples / Test Cases**
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

**Data Structures**
strings!!!

**Algorithm**
Remove pre whitespace
- create new return string and set equal to ''
- create a boolean called nonWhiteSpace and set to false
- for loop that starts at 0 and iterates over string
  - check to see if the current character equals " " AND nonWhiteSpace equals false
    - continue to next iteration of loop
  - add current character to return string
  - set nonWhiteSpace to true

Remove trailing whitespace
- iterate over lefTrimmed string with a for loop
  - if the character is NOT ' ' add it to the return string
  - if the character IS a ' ' then:
    iterate over remaining characters in the string
      - if any character is a NOT ' ' then continue
      - else replace ' ' with ''
*/

function trim(inputString) {
  let nonWhiteSpace = false;

  let leftTrimmed = ''
  for (let index = 0; index < inputString.length; index += 1) {
    if (inputString[index] === ' ' && nonWhiteSpace === false) {
      continue;
    } else {
      leftTrimmed += inputString[index];
      nonWhiteSpace = true;
    }
  }

  let returnString = '';
  for (let index = 0; index < leftTrimmed.length; index += 1) {
    nonWhiteSpace = false;
    if (leftTrimmed[index] !== ' ') {
      returnString += leftTrimmed[index];
    } else {
      for (let subIndex = index; subIndex < leftTrimmed.length; subIndex += 1) {
        if (leftTrimmed[subIndex] !== ' ') {
          nonWhiteSpace = true;
          break;
        } 
      }
      if (nonWhiteSpace) {
        returnString += ' ';
      }
      }
  }
  
  return returnString;
}


console.log(trim('  abc  ') === 'abc');
console.log(trim('abc   ') === 'abc');
console.log(trim(' ab c') === 'ab c');
console.log(trim(' a b  c') === 'a b  c');
console.log(trim('      ') === '');
console.log(trim('') === '');
