/*
**Problem**
A user wrote a function that takes an array as an argument and returns its average. 
Given the code below, the user expects the average function to return 5. 
Is the user's expectation correct? Why or why not?

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/
const myArray = [5, 5];
myArray[-1] = 5;    // [ 0: 5, 1: 5, -1: 5, -2: 5]
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {      // the array length is only 2. This will use the keys for -2 and -1  and index postion for elements at 0  and 1 for a total sum of 20
    sum += array[i];
  }

  return sum / Object.keys(array).length;    // array length is only 2 despite having 4 items in it as only 2 are elements.  sum is 20 / length of 2 will return 10
}

console.log(average(myArray));