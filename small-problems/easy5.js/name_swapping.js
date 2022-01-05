/*
**Problem**
Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

**Examples / Test Cases**
swapName('Joe Roberts');    // "Roberts, Joe"

**Data Structures**


**Algorithm**
*/

// function swapName(name) {
//   let nameArray = name.split(' ');
//   return nameArray[1] + ', ' + nameArray[0];
// }

function swapName(name) {
  let nameArray = name.split(' ');
  return nameArray.pop() + ', ' + nameArray.join(' ');
}


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

console.log(swapName('Joe Diggity Doo Roberts'));    // "Roberts, Joe"