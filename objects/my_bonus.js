/*
**Problem**
The calculateBonus function calculates the bonus for a given salary. 
It makes use of two arguments for determining the bonus: a salary amount and a boolean switch. 
If the boolean is true, the bonus should be half of the salary; otherwise the bonus should be 0. 
Fill in the blanks in the function so that it will work, then explain why it works.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// functions in JavaScript all have an arguments variable that holds all the arguments passed to the function regardless of the number of paramenters defined. is similar but not the same as an Array
// the ternary function checks if the second argument passed (the boolean) is true. If true then the first argument passed (salary) is divided by two and returned. Otherwise 0 is returned.