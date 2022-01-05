/*
**Problem**
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.


**Examples / Test Cases**
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

**Data Structures**


**Algorithm**
*/

// function digitList(int) {
//   let digitArray = [];

//   while (int >= 1) {
//     digitArray.push(int % 10);
//     int = Math.floor(int / 10);
//   } 

//   return digitArray.reverse();
// }

function digitList(int) {
  let intArray = String(int).split('');
  return intArray.map(element => parseInt(element));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]