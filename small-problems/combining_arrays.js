/*
**Problem**
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. 
There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. 
You may assume that both arguments will always be arrays.

**Examples / Test Cases**
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

**Data Structures**


**Algorithm**
*/

function union(array1, array2) {
  let combinedArray = [];

  array1.forEach(element => {
    if (!combinedArray.includes(element)) {
      combinedArray.push(element);
    }
  });

  array2.forEach(element => {
    if (!combinedArray.includes(element)) {
      combinedArray.push(element);
    }
  })
  return combinedArray.sort();
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]