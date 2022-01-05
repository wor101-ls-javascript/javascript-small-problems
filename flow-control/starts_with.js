
/*
**Problem**
Implement a function that determines whether a string begins with another string. 
If it does, the function should return true, or false otherwise.

You may use the square brackets ([]) to access a character by index (as shown below), 
and the length property to find the string length. 
However, you may not use any other properties or methods from JavaScript's built-in String class.

**Examples / Test Cases**

function startsWith(string, searchString) {
  // …
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false


**Data Structures**


**Algorithm**
1. return true if searchString equals an empty string ('')
2. Use for loop to iterate over the searchString
  - check current index character in searchString against the index position character in the string parameter
    - if they are the same then continue to next iteration of loop
    - if they are not the same the return false
3. return true
*/

function startsWith(string, searchString) {
  for (let index = 0; index < searchString.length; index += 1) {
    if (searchString[index] === string[index]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}


let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false