// 1. Write a function named push that accepts two arguments: an Array and any other value. 
//    The function should append the second argument to the end of the Array, and return the new length of the Array.

// function push(array, value) {
//   array[array.length] = value;
//   return array.length;
// }

// let myArray = [1, 2, 3, 4, 5];

// console.log(push(myArray, 6));
// console.log(myArray);

// 2. Write a function named pop that accepts one argument: an Array. 
//    The function should remove the last element from the array and return it.

// const pop = arr => {
//   if (arr.length === 0) {
//     return undefined;
//   }

//   let lastElement = arr[arr.length - 1];
//   arr.length = (arr.length - 1);
//   return lastElement;
// }

// let myArray = [1, 2, 3, 4, 5];

// console.log(pop(myArray));
// console.log(myArray);

// console.log(pop([]));

// 3. Write a function named unshift that accepts two arguments: an Array and a value. 
//    The function should insert the value at the beginning of the Array, and return the new length of the array. 
//    You will need a for loop for this problem.

// const unshift = (arr, value) => {
//   for (index = arr.length; index > 0; index -= 1) {
//     arr[index] = arr[index - 1];
//   }
//   arr[0] = value;
//   return arr.length;  
// }


// let myArray = [1, 2, 3, 4, 5];

// console.log(unshift(myArray, 0));
// console.log(myArray);

// 4. Write a function named shift that accepts one argument: an Array. 
//    The function should remove the first value from the beginning of the Array and return it.

const shift = arr => {
  let firstElement = arr[0];

  if (arr.length === 0) {
    return undefined;
  }

  for (index = 0; index < arr.length; index += 1) {
    arr[index] = arr[index + 1];
  }
  arr.length = (arr.length - 1);
  return firstElement;
}

let myArray = [1, 2, 3, 4, 5];

console.log(shift(myArray));
console.log(myArray);
console.log(shift([]));