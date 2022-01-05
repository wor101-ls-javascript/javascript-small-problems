/*
**Problem**
What will the following code log to the console and why? Don't run the code until after you have tried to answer.


**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();

  }
}

console.log(array2);  // ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];  because the first for loop is altering array2 by adding primitive strings as elements. in the 2nd for loop the primitive string in array1 is modified, but since primities are immutable the elements in array2 are not affected