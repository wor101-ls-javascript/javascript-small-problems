/*
**Problem**
Identify the bug in the following code. Don't run the code until after you've tried to answer.


**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];  //this is passing an object a as an argument and not the string
myObject.a;