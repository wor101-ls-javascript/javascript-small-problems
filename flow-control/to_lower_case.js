
/*
**Problem**
Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, 
add 32 to that number, then convert the number back to a character using the same ASCII table. 
You can use the String.fromCharCode and the String.charCodeAt methods for these operations. 

For example:
let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. 
However, you may not use any other properties or methods from JavaScript's built-in String class.

**Examples / Test Cases**

function toLowerCase(string) {
  // …
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"


- string of numbers returns string of numbers
- if already lowercase then returns lowercase
- only want to change ASCII characters with ascii value of 65 through 90

**Data Structures**


**Algorithm**
1. create a returnString variable
2. iterate through the string parameter using a for loop
  - use the .charCodeAt prototype method to get asci code of current character
  - if ascii code is NOT 65 through 90
    - add current character to the returnString
    - go to next iteration of for loop
  - else
    - add 32 to the ascci number
    - use .fromCharCode prototype method to get the lowercase letter
    - add lowercase letter to the returnString
3. return the returnString
*/

function toLowerCase(string) {
  let returnString = '';

  for (let index = 0; index < string.length; index += 1) {
    let ascii = string.charCodeAt(index);

    if (ascii >= 65 && ascii <= 90) {
      let lowercaseAscii = ascii + 32;
      returnString += String.fromCharCode(lowercaseAscii); 
    } else {
      returnString += string[index];
    }
  }

  return returnString;
}


console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
