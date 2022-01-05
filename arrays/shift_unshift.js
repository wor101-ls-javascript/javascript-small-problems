// In this exercise, you will implement your own versions of the Array.prototype.shift and Array.prototype.unshift methods. 
// These methods manipulate the contents of an array starting from the first index.

// The shift method removes the first element from an array and returns that element; 
// if the array is empty, shift returns undefined. 

// The unshift method adds one or more elements to the start of an array and returns the new length of the array. 
// Both methods mutate the original array.

function shift(array) {
  if (array.length === 0) {
    return undefined;
  }

  let firstElement = array.reverse().pop();
  array.reverse();
  return firstElement;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

function unshift(array, ...args) {
  array = args.concat(array);

  return array.length;
}

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3