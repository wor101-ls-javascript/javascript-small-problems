// Write a program that prompts the user for two positive integers, 
// and then prints the results of the following operations on those 
// two numbers: addition, subtraction, product, quotient, remainder, 
// and power. Do not worry about validating the input.

// let firstNum = prompt("Enter the first number: ");
// let secondNum = prompt("Enter the second number: ");

// console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
// console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
// console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
// console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
// console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
// console.log(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);

// console solution provided by LS
const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);