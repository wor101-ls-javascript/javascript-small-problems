/*
**Problem**
Write a function that takes an array of integers as input, multiplies all of the integers together, 
divides the result by the number of entries in the array, 
and returns the result as a string with the value rounded to three decimal places.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. get size of array and save as divisor
2. initialize a sum variable and set to result of reducing array by totaling elements
3. get average by dividing sum by divisor
4. use .toFixed(3) to get number with correct number of decimals
5. string it and return it
*/

function showMultiplicativeAverage(array) {
  let divisor = array.length;
  let sum = array.reduce((accumulator, element) => accumulator * element);
  let average = sum / divisor;

  return String(average.toFixed(3));
}


console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"