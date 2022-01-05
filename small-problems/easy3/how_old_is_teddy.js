/*
**Problem**
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

**Examples / Test Cases**
Teddy is 69 years old!

**Data Structures**


**Algorithm**
*/

function howOld() {
  let age = Math.floor((Math.random() * 181) + 20);

  console.log(`Teddy is ${age} years old!`);
}

howOld();
howOld();
howOld();
howOld();
console.log('');
// 

function randomBetween(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomBetween(12, 1));
console.log(randomBetween(1, 12));
console.log(randomBetween(12, 1));
console.log(randomBetween(1, 12));
console.log(randomBetween(12, 1));
console.log(randomBetween(1, 12));
console.log(randomBetween(12, 1));
console.log(randomBetween(1, 12));
