/*
**Problem**
Write a function that takes a string, doubles every consonant character in the string, 
and returns the result as a new string. 
The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

**Examples / Test Cases**
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

**Data Structures**


**Algorithm**
1. create const variable to hold consonants
2. create return array
3. loop over string
  - for every character check if it is included in the consonants array
    - if so add it twice to the return array
    - if not, add it once to the return array
4. join and return the array

*/

function doubleConsonants(string) {
  const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
  let newstringArray = [];

  for (let index = 0; index < string.length; index += 1) {
    if (consonants.includes(string[index].toUpperCase())) {
      newstringArray.push(string[index], string[index]);
    }
    else {
      newstringArray.push(string[index]);
    }
  }
  return newstringArray.join('');
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""