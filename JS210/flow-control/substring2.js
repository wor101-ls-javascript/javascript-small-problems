
/*
**Problem**

This practice problem is similar to the previous one. This time though, both arguments are indices of the provided string. 

The following rules apply:

  - If both start and end are positive integers, start is less than end, and both are within the boundary of the string, 
    return the substring from the start index (inclusive), to the end index (NOT inclusive).
  - If the value of start is greater than end, swap the values of the two, then return the substring as described above.
  - If start is equal to end, return an empty string.
  - If end is omitted, the end variable inside the function is undefined. 
    Return the substring starting at position start up through (and including) the end of the string.
  - If either start or end is less than 0 or NaN, treat it as 0.
  - If either start or end is greater than the length of the string, treat it as equal to the string length.


**Examples / Test Cases**

function substring(string, start, end) {
  // …
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"


**Data Structures**


**Algorithm**
1. determine correct start
  - if start is less than 0 or NaN set to 0
  - if start is greater than length of string set to length of string
2. determine correct end
  - if end is less than 0, Nan, or undefined set to 0
  - if end is greater than length of string set to length of string
3. If start > end, then swap start and end values
4. use for loop to iterate over string parameter
  - set index to equal start
  - loop until end value is met
  - on each iteration add value to newString
5. return newString
*/

function substring(string, start, end) {
  if (start < 0 || isNaN(start)) {
    start = 0;
  } else if (start > string.length) {
    start = (string.length);
  } 

  if (end > string.length || end === undefined) {
    end = (string.length);
  } else if (end < 0 || isNaN(end)) {
    end = 0;
  } 

  if (start > end) {
    [start, end] = [end, start];
  }

  let newString = '';
  for (let index = start; index < end; index += 1) {
    newString += string[index];
  }

  return newString;
}


let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"