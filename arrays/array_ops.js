// 1. Write a function indexOf that accepts two arguments: an array and a value. 
//    The function returns the first index at which the value can be found, or -1 if the value is not present.
// const indexOf = (arr, value) => {
//   for (let index = 0; index < arr.length; index += 1) {
//     if (arr[index] === value) {
//       return index;
//     }
//   }
//   return -1;
// }

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

// 2. Write a function lastIndexOf that accepts two arguments: an array and a value. 
//    The function returns the last index at which the value can be found in the array, or -1 if the value is not present.
// const lastIndexOf = (arr, value) => {
//   for (let index = arr.length - 1; index >= 0; index -= 1) {
//     if (arr[index] == value) {
//       return index;
//     }
//   }
//   return -1;
// }

// console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));        // -1

// 1. Write a function named slice that accepts three arguments: an Array, a start index, and an end index. 
//    The function should return a new Array that contains values from the original Array starting with the value at the starting index, 
//    and including all values up to but not including the end index. Do not modify the original Array.

//    You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

// const slice = (arr, start, end) => {
//   let newArray = [];

//   for (let index = start; index < end; index += 1) {
//     newArray[newArray.length] = arr[index];
//   }

//   return newArray;
// }

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// 2. Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove. 
//    The function should remove values from the original Array, starting with the first index and removing the specified number of values. 
//    The function should return the removed values in a new Array.

//    You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

function splice(array, startNum, numElements) {
  let newArray = [];
  let originalArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (index < startNum || index >= (startNum + numElements)) {
      originalArray.push(array[index]);
    } else {
      newArray.push(array[index]);
    }
  }
  
  array.length = originalArray.length;

  for (let index = 0; index < array.length; index += 1) {
    array[index] = originalArray[index];
  }

  return newArray;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]

// 3. Write a function named concat that accepts two Array arguments. 
//    The function should return a new Array that contains the values from each of the original Arrays.

//    You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

const concat = (array1, array2) => {
  let newArray = [];


  for (let index = 0; index < array1.length; index += 1) {
    newArray[newArray.length] = array1[index];
  }

  for (let index = 0; index < array2.length; index += 1) {
    newArray[newArray.length] = array2[index];
  }
  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// 4. Write a function named join that accepts two arguments: an Array and a String. 
//    The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. 
//    You may assume that a separator will always be passed.

//    You can call the String function on any JavaScript value to get its String representation.

const join = (array, separator) => {
  let newString = ''

  for (index = 0; index < array.length; index += 1) {
    if (index < array.length - 1) {
      newString += (String(array[index]) + separator)
    } else {
      newString += String(array[index]);
    }
  }

  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'