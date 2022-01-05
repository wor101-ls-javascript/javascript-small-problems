/*
**Problem**
Write a function that takes a string consisting of one or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

**Examples / Test Cases**
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

**Data Structures**
return object
  - keys that are strings representing the length of a word
  - values are integers representing the number of words of that length

**Algorithm**
1. create letterCounter object
2. split input string by ' ' 
3. iterate over array of words
  - for each word get its length
  - if letterCounter object has key equal to string value of length
    - increase value associated with key by 1
  - else add new key ('length') value (1) pair to letterCounter object
4. return letterCounter object
*/

function wordSizes(string) {
  const wordArray = string.split(' ');
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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}