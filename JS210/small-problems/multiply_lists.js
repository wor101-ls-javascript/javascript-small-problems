/*
**Problem**
Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array that contains the product of each pair of numbers from the 
arguments that have the same index. You may assume that the arguments contain the same number of elements.


**Examples / Test Cases**
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

**Data Structures**


**Algorithm**
*/

function multiplyList(array1, array2) {
  let productArray = [];

  for (let index = 0; index < array1.length; index += 1) {
    productArray.push(array1[index] * array2[index]);
  }
  return productArray;
}



console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]