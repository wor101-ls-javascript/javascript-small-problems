/*
**Problem**
Write a function that takes an array of numbers and returns an array with the same number of elements, 
but with each element's value being the running total from the original array.

**Examples / Test Cases**
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

**Data Structures**


**Algorithm**
1. create new array to be returned
2. loop over elements in input array
  - for each create a sub loop starting at 0 and going through current index
    - sum all numbers encounterd
    - add sum to array to be returned
*/

// function runningTotal(array) {
//   let newArray = [];
//   let sum = 0;

//   for (let index = 0; index < array.length; index += 1) {
//     sum += array[index];
//     newArray.push(sum);
//   }
//   return newArray;
// }

function runningTotal(array) {
  let sum = 0;
  return array.map(element => {
    let current_sum = sum;
    sum += element;
    return element + current_sum;
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []