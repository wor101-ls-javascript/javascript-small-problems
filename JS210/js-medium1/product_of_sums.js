/*
**Problem**
The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers. 
Read through the following code. Will it produce the expected result? Why or why not?

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// the total function doesn't actually return sum
// sum is not assigned an explicit value before the total function tries to add to it