/*
**Problem**
Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.

Note that repeatedCharacters does a bit more than simply count the frequency of each character: 
it determines the counts, but only returns counts for characters that have a count of 2 or more. 
It also ignores the case.

**Examples / Test Cases**
repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

**Data Structures**


**Algorithm**
*/

function repeatedCharacters(inputString) {
  // let chars = inputString.toLowerCase().split('').sort();

  inputString = inputString.toLowerCase();
  let repeats = {};

  for (let index = 0; index < inputString.length; index += 1) {
    let currentchar = inputString[index];
    if (Object.keys(repeats).indexOf(currentchar) !== -1) {
      continue;
    }

    let count = 1;
    for (let j = index + 1; j < inputString.length; j += 1) {
      if (inputString[j] === currentchar) {
        count += 1;
      }
    }
    if (count > 1) {
      repeats[currentchar] = count;
    }
  }
  // for (let index = 0; index < chars.length; index += 1) {
  //   if (Object.keys(repeats).includes(chars[index])) {
  //     continue;
  //   }
  //   let firstCharIndex = chars.indexOf(chars[index]);
  //   let lastCharIndex = chars.lastIndexOf(chars[index]);
  //   let numberOfChars = lastCharIndex - firstCharIndex + 1;
  //   if (numberOfChars > 1) {
  //     repeats[chars[index]] = numberOfChars;
  //   }
  // }
  return repeats;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }