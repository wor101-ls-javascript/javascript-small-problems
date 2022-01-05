/*
**Problem**
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. 
Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. 
If the original array contains an odd number of elements, place the middle element in the first half array.

**Examples / Test Cases**
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

**Data Structures**


**Algorithm**
1. determine length of input array
2. creat return array consisiting of two arrays
3. create for loop that loops while less tha to length / 2 rounded up
  - use index to add element from input to first elment of return array
4. create for loop that starts at length / 2 rounded up and goes to 1 less than length of input
  - use index to add elements from the input array to the second element of the return array
5. return the return array
  */


// function halvsies(array) {
//   let length = array.length;
//   let halfIndex = Math.ceil(length / 2)
//   let newArrays = [[],[]];

//   for (let index = 0; index < halfIndex; index += 1) {
//     newArrays[0].push(array[index]);
//   }

//   for (let index = halfIndex; index < length; index += 1) {
//     newArrays[1].push(array[index]);
//   }
//   return newArrays;
// }

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]