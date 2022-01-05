
/*
**Problem**
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.


**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. create for loop from 1 to 99
2. for each iteration log current index to console
*/

// function odd_numbers() {
//   for (let index = 1; index < 100; index += 2) {
//     console.log(index);
//   }
// }

function odd_numbers(min, max) {
  for (let index = min; index <= max; index += 1) {
    if ( index % 2 === 0) {
      continue;
    } else {
      console.log(index);
    }
  }
}

odd_numbers(72, 100);

