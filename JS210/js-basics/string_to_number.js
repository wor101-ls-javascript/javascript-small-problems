/*
**Problem**
For this exercise we're going to learn more about type conversion by implementing our own parseInt function 
that converts a string of numeric characters (including an optional plus or minus sign) to a number.

The function takes a string of digits as an argument, and returns the appropriate number. 
Do not use any of the built-in functions for converting a string to a number type.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

**Examples / Test Cases**
stringToInteger('4321');      // 4321
stringToInteger('570');       // 570

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

function stringToInteger(inputString) {
  let length = inputString.length;
  let int = 0;
  // get number position   10 ** (length - 1);

  for (let index = 0; index < length; index += 1) {
    let digit = getSingleDigit(inputString[index]);

    int += (10 ** (length - 1 - index)) * digit;
  }
  return int;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570