
/*
**Problem**
Given a string that consists of some words and an assortment of non-alphabetic characters, 
write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, 
you should only have one space in the result (i.e., the result string should never have consecutive spaces).

**Examples / Test Cases**
cleanUp("---what's my +*& line?");    // " what s my line "

**Data Structures**


**Algorithm**
1. intialize return string 
2. iterate through input string using a for loop
  - for each character test to see if alphabet
    - if yes, then add character to return string
    - if no, check to see if previous character in return string is ' ' 
        - if yes, then continue
        - if no, then add ' ' to return string
3. return new string

*/

function cleanUp(string) {
  let newString = ''

  for (let index = 0; index < string.length; index += 1) {
    let ascii = string.toLowerCase().charCodeAt(index)
    if ( ascii >= 97 && ascii <= 122) {
      newString += string[index];
    } else if ( newString[newString.length - 1] === ' ') {
      continue;
    } else {
      newString += ' ';
    }
  }

  return newString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "