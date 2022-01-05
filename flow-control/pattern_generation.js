
/*
**Problem**
Write a function that takes a number of rows as the argument nStars 
and logs a square of numbers and asterisks. 
For example, if nStars is 7, log the following pattern:

**Examples / Test Cases**
generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

**Data Structures**
parameter = rows
need a counter Number


**Algorithm**
1. create a for loop 
  - start with counter at 1 
  - continues until counter is greater than the maximum number of rows
  - increase counter by 1 each iteration
2. Each iteration of for loop:
  - create string variable that will be logged
  - create for loop from 1 up to current counter
    - for each iteration, add counter to string
  - add * to string equal to maximum number minus the current iteratio of the loop
  - log string

For rows greater than 9:
- Calculate total number of characters required from the maxRow (up to 99)
  - subract 9
  - muliply remider by 2
  - add 9 to total

*/

function getMaxRowLength(maxRow) {
  if (maxRow < 10) {
    return maxRow;
  } else if (maxRow < 100) {
    return ((maxRow - 9) * 2) + 9;
  }
}

function generatePattern(maxRow) {
  for (let row = 1; row <= maxRow; row += 1) {
    let rowOutput = '';

    for (let char = 1; char <= row; char += 1) {
      rowOutput += char.toString();
    }

    rowOutput += '*'.repeat(getMaxRowLength(maxRow) - rowOutput.length);
    console.log(rowOutput);
  }
}

generatePattern(7);
console.log('');
generatePattern(12);
console.log('');
generatePattern(20);