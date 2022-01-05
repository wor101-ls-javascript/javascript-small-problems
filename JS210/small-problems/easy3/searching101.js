/*
**Problem**
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

**Examples / Test Cases**
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].

**Data Structures**


**Algorithm**
*/

const rlSync = require('readline-sync');

const numSuffix = ['1st', '2nd', '3rd', '4th', '5th'];

let numbers = [];
for (let index = 0; index < 5; index += 1) {
  numbers.push(rlSync.question(`Enter the ${numSuffix[index]} number: `));
}
let lastNumber = rlSync.question('Enter the last number: ');

// if (numbers.indexOf(lastNumber) === -1) {
//   console.log('');
//   console.log(`The number ${lastNumber} does not appear in ${numbers}.`);
// } else {
//   console.log('');
//   console.log(`The number ${lastNumber} DOES appear in ${numbers}.`);
// }

if (numbers.some(element => element > 25) && numbers.includes(lastNumber)) {
  console.log('');
  console.log(`The array ${numbers} includes a number greater than 25 and includes your last number ${lastNumber}`);
} else {
  console.log('');
  console.log(`The array does not contain a number greater than 25`);
}