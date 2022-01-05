let rlQuery = require('readline-sync');

function multiply(a, b) {
  return a * b;
}

let num1 = rlQuery.question("Enter the first number: ");
let num2 = rlQuery.question("Enter the second number: ");
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);