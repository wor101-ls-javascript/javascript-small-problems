
/*
**Problem**
Write a function that takes two strings as arguments, determines the length of the two strings, 
and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. 

You may assume that the strings are of different lengths.

**Examples / Test Cases**
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

**Data Structures**
- takes strings
- uses numbers (integers) to determine length of strings
- returns a single string

**Algorithm**
1. use length method to determine size of each string parameter
2. assign short string to shortString
3. assign long string to longString
4. add shortString to longString to shortString
5. return newString

*/

function shortLongShort(string1, string2) {
  let shortString;
  let longString;

  if (string1.length < string2.length) {
    shortString = string1;
    longString = string2;
  } else {
    shortString = string2;
    longString = string1;
  }

  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"