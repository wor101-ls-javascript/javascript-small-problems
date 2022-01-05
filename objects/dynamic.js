/*
**Problem**
What will the following code log to the console and why? Don't run the code until after you have tried to answer.



**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

// const myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };

// const prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';

// console.log(myObject[prop2]); // logs 678 as a new property named 456 with a value of 678 is created on line 24
// console.log(myObject.prop2);  // logs 456 as the property named prop2 is updated to 456 on line 23


const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // log {funcProp: 'hello, '}
myObj[myFunc()] = 'world!';
console.log(myObj);  // log {funcProp: 'world!'}