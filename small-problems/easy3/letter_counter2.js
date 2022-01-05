/*
**Problem**
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/


function wordSizes(string) {
  let wordArray = string.split(' ')
  wordArray = wordArray.map(word => onlyAlpha(word));
  let letterCounter = {};

  for (let index = 0; index < wordArray.length; index += 1) {
    let length = wordArray[index].length;

    if (length === 0) {
      continue;
    }

    if (letterCounter[String(length)]) {
      letterCounter[String(length)] += 1;
    } else {
      letterCounter[String(length)] = 1;
    }
  }
  return letterCounter;
}

function onlyAlpha(string) {
  let alphaString = ''
  let lowerString = string.toLowerCase();

  for (let index = 0; index < lowerString.length; index += 1) {
    if (lowerString[index] >= 'a' && lowerString[index] <= 'z') {
      alphaString += string[index];
    }
  }
  return alphaString;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}