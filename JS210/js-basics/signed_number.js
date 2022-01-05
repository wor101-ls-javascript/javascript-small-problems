/*
**Problem**
The previous exercise mimics the parseInt function to a lesser extent. 
In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. 
The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; 
if it is a -, your function should return a negative number. 
If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

**Examples / Test Cases**
stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100

**Data Structures**


**Algorithm**
*/


function getSingleDigit(char) {
  switch (char) {
    case '0': return 0;
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    case '4': return 4;
    case '5': return 5;
    case '6': return 6;
    case '7': return 7;
    case '8': return 8;
    case '9': return 9;
    default: return undefined;
  }
}

function stringToSignedInteger(inputString) {
  let stringArray = inputString.split('');
  let negative = false;

  if (stringArray[0] === '-') {
    negative = true;
    stringArray.shift();
  } else if (stringArray[0] === '+') {
    stringArray.shift();
  }

  let length = stringArray.length;
  let int = 0;
  for (let index = 0; index < length; index += 1) {
    let digit = getSingleDigit(stringArray[index]);

    int += (10 ** (length - 1 - index)) * digit;
  }
  return negative ? int * -1 : int; 
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100