/*
**Problem**
What will the following code log to the console and why? Don't run the code until after you have tried to answer.


**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);    // 'a'
console.log(myArray[-1]);   // undefined

myArray[-1] = 'd';    // [ 0: 'a', 1: 'b', 2: 'c', -1: 'd']
myArray['e'] = 5;     // [ 0: 'a', 1: 'b', 2: 'c', -1: 'd', 'e': 5]
myArray[3] = 'f';     // [ 0: 'a', 1: 'b', 2: 'c', -1: 'd', 'e': 5, 3: 'f']  order is wrong (keep array indexed elements in order)

console.log(myArray[-1]);   // 'd'
console.log(myArray['e']);  // 5
console.log(myArray);       // ["a", "b", "c", "f", "-1": "d", e: 5]