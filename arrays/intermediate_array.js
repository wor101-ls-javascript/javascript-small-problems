// 1. Write a function that creates and returns a new array from its array argument. 
//    The new array should contain all values from the argument array whose positions have an odd index.
// function oddElementsOf(arr) {
//   let oddArray = [];

//   for (let index = 1; index < arr.length; index += 2) {
//     oddArray.push(arr[index]);
//   }
//   return oddArray;
// }

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// 2. Write a function that takes an array argument and returns a new array that contains all the argument's elements 
//    in their original order followed by all the argument's elements in reverse order.

// function mirroredArray(arr) {
//   let newArray = [];

//   for (index = arr.length - 1; index >= 0; index -= 1) {
//     newArray.push(arr[index]);
//   }

//   return arr.concat(newArray);
// }

// console.log(mirroredArray(digits));

// function mirroredArray2(arr) {
//   let reversedArray = arr.slice();
//   return arr.concat(reversedArray.reverse());
// }

// console.log(mirroredArray2(digits));

// 3. Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. 
//    Do not alter the original array.
// function sortDescending(arr) {
//   let arrCopy = arr.slice();
//   return arrCopy.sort((firstEl, secondEl) => secondEl - firstEl);
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]


// 4. Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.
// function matrixSums(arr) {
//   let newArray =[];

//   arr.forEach(element => {
//     newArray.push(element.reduce((accumulator, currentValue) => accumulator + currentValue));
//   });
//   return newArray;
// }

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// 5. Write a function that takes an array, and returns a new array with duplicate elements removed.

// function uniqueElements(arr) {
//   let newArray = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     if (newArray.includes(arr[index])) {
//       continue;
//     } else {
//       newArray.push(arr[index]);
//     }
//   }
//   return newArray;
// }

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

// Find Missing Numbers:
// Write a function that takes a sorted array of integers as an argument, and returns an array 
// that includes all the missing integers (in order) between the first and last elements of the argument.

// 1. find value of first Element
// 2. find value of last Element
// 3. create for loop from one greater than first value and loop while less than last value
//   - if current index is not included in the original array then add to new array
// 4. return new array

function missing(arr) {
  let startValue = arr[0];
  let endValue = arr[arr.length - 1];
  let missingValues = [];

  for (let currentValue = startValue + 1; currentValue < endValue; currentValue += 1) {
    if (arr.includes(currentValue)) {
      continue;
    } else {
      missingValues.push(currentValue);
    }    
  }
  return missingValues;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []





