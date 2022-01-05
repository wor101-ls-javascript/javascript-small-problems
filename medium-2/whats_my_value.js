/*
**Problem**
What will the following program log to the console? Can you explain why?


**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';                   // [ 0: 'Apples', 1: 'Peaches', 2: 'Grapes', 3.4: 'Oranges] = length still equals 3
console.log(array.length);                // 3
console.log(Object.keys(array).length);   // 4 as non-indexed keys are returned

array[-2] = 'Watermelon';                 // [ 0: 'Apples', 1: 'Peaches', 2: 'Grapes', 3.4: 'Oranges, -2: 'Watermelon] 
console.log(array.length);                // length is still 3
console.log(Object.keys(array).length);   // length is 5