
/*
**Problem**
The array comparison function that we implemented in the Arrays lesson (Alternate link if the previous link doesn't work) 
implicitly assumed that when comparing two arrays, any matching values must also have matching index positions. 
The objective of this exercise is to reimplement the function so that two arrays containing the same values—but in a different order—are considered equal. 
For example, [1, 2, 3] === [3, 2, 1] should return true.


**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. return false if the arrays are different lengths
1a. create copies of each array
2. sort each copy
3. loop through array1
  - if any element in array1 doesn't equal the elment in array 2 return false
*/

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let copy1 = array1.slice().sort();
  let copy2 = array2.slice().sort();

  for (let index = 0; index < copy1.length; index +=1) {
    if (copy1[index] !== copy2[index]) {
      return false;
    }
  }
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true