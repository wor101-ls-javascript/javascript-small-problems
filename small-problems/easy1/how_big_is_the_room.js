
/*
**Problem**
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. prompt user for length and save to length variable
2. prompt user for width and save to widght variable
3. create squareMeters variable and set equal to length * width
4. create squareFeet variable and set equal to squareMeters * 10.7639
5. log to console message with squareMeters and squareFeet 
*/

let rlSync = require('readline-sync');
let unitOfMeasure = rlSync.question("Please enter 'meters' or 'feet' for your unit of measure:\n");
let length = parseInt(rlSync.question(`Enter the length of the room in ${unitOfMeasure}:\n`), 10);
let width = parseInt(rlSync.question(`Enter the width of the room in ${unitOfMeasure}:\n`), 10);

let squareFeet;
let squareMeters;

if (unitOfMeasure === 'meters') {
  squareMeters = (length * width).toFixed(2);
  squareFeet = (squareMeters * 10.7639).toFixed(2);
  console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`);
  
} else if (unitOfMeasure === 'feet')
{
  squareFeet = (length * width).toFixed(2);
  squareMeters = (squareFeet / 10.7639).toFixed(2);
  console.log(`The area of the room is ${squareFeet} square feet (${squareMeters} square meters).`);
} else {
  console.log('Invalid unit of measure.')
}

