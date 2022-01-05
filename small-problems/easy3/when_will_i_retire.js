/*
**Problem**
Build a program that logs when the user will retire and how many more years the user has to work until retirement.


**Examples / Test Cases**
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

**Data Structures**


**Algorithm**
*/

let rlSync = require('readline-sync');
const year = new Date().getFullYear();

let age = parseInt(rlSync.question('What is your age? '), 10);
let retirementAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);
let remainingYears = retirementAge - age;

console.log(`It's ${year}. You will retire in ${year + remainingYears}`);
console.log(`You only have ${remainingYears} to go!`);

// if we don't use the new keyword before Date(), instead of instantiating a new Date object, we are simply invoking the Date() method and returning a string