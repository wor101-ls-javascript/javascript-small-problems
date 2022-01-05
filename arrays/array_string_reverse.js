// In this exercise, you will implement your own version of the Array.prototype.reverse method. 
// Your implementation should differ from the built-in method in the following two ways:

// - It should accept either a string or an array as an argument.
// - It should return a new string or array.



function reverse(inputForReversal) {
  let reversedInput;

  Array.isArray(inputForReversal) ? reversedInput = [] : reversedInput = '';

  for (let index = inputForReversal.length - 1; index >= 0; index -= 1) {
    if (Array.isArray(inputForReversal)) {
      reversedInput.push(inputForReversal[index]);
    } else {
      reversedInput += inputForReversal[index];
    }
  }

  return reversedInput;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]