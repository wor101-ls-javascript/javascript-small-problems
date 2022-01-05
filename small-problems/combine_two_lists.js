/*
**Problem**
Write a function that combines two arrays passed as arguments, 
and returns a new array that contains all elements from both array arguments, 
with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. find length of longest array
  - create return array and leave empty
2. for loop starts at 0 and continues while less than length of longest array
  - use index against both arrays
    - if index is greater than length of array - 1 do nothing
    - else add element to return array
*/

function interleave(array1, array2) {
  let maxLength = array1.length > array2.length ? array1.length : array2.length;

  let returnArray = [];
  for (let index = 0; index < maxLength; index += 1) {
    if (index < array1.length) {
      returnArray.push(array1[index])
    }

    if (index < array2.length) {
      returnArray.push(array2[index]);
    }
  }
  return returnArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]