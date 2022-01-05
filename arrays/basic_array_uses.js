// In the problems below, we ask you to write functions that work with Arrays. 
// You may use Array's index access ([]), the length property, and any Array Methods you need.

// 1. Write a function that returns the first element of an array passed in as an argument.

let firstElementOf = arr => {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"

// 2. Write a function that returns the last element of an array passed in as an argument.

let lastElementOf = arr => {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A']));   // returns "A"

// 3. Write a function that accepts two arguments, an array and an integer index position, and returns the element at the given index. 
  //  What happens if the index is greater than the length of the array? 
  //  What happens if it is a negative integer?

function nthElementOf(arr, index) {
  if (index > arr.length - 1) {
    return undefined;
  } else if (index < 0) {
    return arr[arr.length + index];
  } else {
    return arr[index];
  }
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   // returns 16
console.log(nthElementOf(digits, 8));   // what does this return?
console.log(nthElementOf(digits, -1));  // what does this return?


// 5. Write a function that accepts an array as the first argument and an integer value, count, as the second. 
//    It should return a new array that contains the first count elements of the array.
let firstNOf = (arr, count) => {
  let newArray = [];

  for (let index = 0; index < count; index += 1) {
    newArray[index] = arr[index];
  }
  return newArray;
}


console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// 6. Write a function like the previous one, except this time return the last count elements as a new array.
function lastNOf(arr, count) {
  return arr.slice(-count);
}

console.log(lastNOf(digits, 3));


// 8. Write a function that accepts two arrays as arguments and returns an array with the first element from the first array and the last element from the second array.
function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));    // returns [4, 42]