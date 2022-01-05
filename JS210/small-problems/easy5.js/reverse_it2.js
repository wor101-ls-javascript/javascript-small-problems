/*
**Problem**
Write a function that takes a string argument containing one or more words and 
returns a new string containing the words from the string argument. 
All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. Words will be separated by a single space.


**Examples / Test Cases**
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

**Data Structures**


**Algorithm**
1. create array of words using split(' ')
2. iterate over array of words
  -  if word has length less than 5
      - continue to next word
  \- if word has length of 5+
    - split word into array of characters
    - reverse array of characters
    - rejoin array of characters 
    - save current index position word as new reversed word
3. rejoin array of words with (' ')
4. return rejoined array
*/

function reverseWords(string) {
  let wordsArray = string.split(' ');

  for (let index = 0; index < wordsArray.length; index += 1) {
    if (wordsArray[index].length >= 5) {
      let word = wordsArray[index].split('');
      wordsArray[index] = word.reverse().join('');
    }
  }
  return wordsArray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"