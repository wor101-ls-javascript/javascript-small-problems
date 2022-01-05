/*
**Problem**
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. 
You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

**Examples / Test Cases**
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

**Data Structures**


**Algorithm**
1. return string if length is equal to 1
2. split string into an array of words
3. create array of updated word 
4. loop over array of words
  - create variable newWord and set equal to ''
  - for each word loop over each character using a for loop
    - if index === 0, then add character from word at index of length - 1 to newWord
    - else if index === length - 1, then add character from word at index 0 to newWord
    - else add character from word at current index
  - add newWord to return array
5. join return array with (' ') and return

*/

// function swap(string) {
//   if (string.length === 1) {
//     return string;
//   }
//   let arrayString = string.split(' ');
//   let newWords = [];

//   for (let i = 0; i < arrayString.length; i += 1) {
//     let currentWord = arrayString[i];
//     let newWord = '';

//     for (let j = 0; j < currentWord.length; j += 1) {
//       if (j === 0) {
//         newWord += currentWord[currentWord.length - 1];
//       } else if (j === currentWord.length - 1) {
//         newWord += currentWord[0];
//       } else {
//         newWord += currentWord[j];
//       }
//     }
//     newWords.push(newWord);
//   }
//   return newWords.join(' ');
// }


// function swap(string) {
//   const wordArray = string.split(' ')
//   let newArray = [];

//   for (let i = 0; i < wordArray.length; i += 1) {
//     let word = wordArray[i];
//     if (word.length === 1) {
//       newArray.push(word);
//     } else {
//       newArray.push(word[word.length -1] + word.slice(1, -1) + word[0]);
//     }    
//   }
//   return newArray.join(' ');
// }

function swap(string) {
  const wordArray = string.split(' ');
  
  let newArray = wordArray.map(word => {
                    if (word.length === 1) {
                      return word;
                    } else {
                      return word[word.length -1] + word.slice(1, -1) + word[0];
                    }
                  })

  return newArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"