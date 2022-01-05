/*
**Problem**
Write a function that takes a string argument and returns a new string that contains the value 
of the original string with all consecutive duplicate characters collapsed into a single character.

**Examples / Test Cases**
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

**Data Structures**
- input string
- output string

**Algorithm**
1. - create variable called lastChar
   - create varieable called newString
2. use for loop to iterate through string
  - on each iteration check to see if current character is the same as lastChar
    - if the same then continue to next iteration
    - if not the same
      - add current char to newString
      - update lastChar to current char
3. return newString
*/

function crunch(string) {
  let newString = '';
  let lastChar = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== lastChar) {
      newString += string[index];
      lastChar = string[index];
    }
  }

  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""