
/*
**Problem**
Write a program that asks the user to enter an integer greater than 0, 
then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

// function sum_or_product(int, operation) {
//   let total = 1;

//   if (operation === 's') {
//     for (let index = 2; index <= int; index += 1) {
//       total += index;      
//     }
//     console.log(`The sum of the integers between 1 and ${int} is ${total}.`);
//   } else if (operation === 'p') {
//     for (let index = 2; index <= int; index += 1) {
//       total *= index;
//     }
//     console.log(`The product of the integers between 1 and ${int} is ${total}.`);
//   } else {
//     console.log('Invalid input');
//   }
// }

// let rlSync = require('readline-sync');
// let userInt = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
// let operation = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product.`);

// sum_or_product(userInt, operation);

function sumArray(array) {
  const sumReducer = (accumultaor, currentValue) => accumultaor + currentValue;
  let total = array.reduce(sumReducer);
  console.log(`The sum of the integers between 1 and  is ${total}.`)
}

function productArray(array) {
  const productReducer = (accumulator, currentValue) => accumulator * currentValue;
  let total = array.reduce(productReducer);
  console.log(`The product of the integers between 1 and  is ${total}.`)
}

array1 = [1,2,3,4,5];

sumArray(array1);
productArray(array1);