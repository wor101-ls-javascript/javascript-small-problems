
/*
**Problem**
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.


**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

function even_numbers(min, max) {
  for (index = min; index <= max; index += 1) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
}

even_numbers(1, 99);