
/*
**Problem**
Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

**Examples / Test Cases**
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

**Data Structures**


**Algorithm**
1. check if input integer is evenly divisible by 100
    - if yes, then century is the result of dividing by 100
    - if no, then century is result of dividing by 100 rounded up to nearest int (parseInt + 1)
2. add correct postfix
*/

function century(year) {
  let cent;
  if (year % 100 === 0) {
    cent = (year / 100);
  } else {
    cent = Number.parseInt(year / 100) + 1;
  }



  let lastDigit = cent % 10;
  let lastTwoDigits = cent % 100;

  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return cent + 'th';
  }

  switch (lastDigit) {
    case 1: return cent + 'st';
    case 2: return cent + 'nd';
    case 3: return cent + 'rd';
    default: return cent + 'th';
  }

}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"