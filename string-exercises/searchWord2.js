/*
**Problem**
The function from the previous exercise returns the number of occurrences of a word in some text. 
Although this is useful, there are also situations in which we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and a string of text as arguments, 
and returns the text with every instance of the word highlighted. 
To highlight a word, enclose the word with two asterisks ('**') 
on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. split text into words using split(' ')
2. use transformation map to iterate
  - if current word matches argument return **WORD**
  - else return word
3. rejoin and return string
*/


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(searchWord, text) {
  // let words = text.split(' ');
  // return words.map(word => {
  //              if (word.toLowerCase() === searchWord.toLowerCase()) {
  //               return `**${word.toUpperCase()}**`
  //              } else {
  //                return word;
  //              }
  //              }).join(' ');
  let searchRegExp = new RegExp(searchWord, 'ig');
  return text.replace(searchRegExp, `**${searchWord.toUpperCase()}**`);
}

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"