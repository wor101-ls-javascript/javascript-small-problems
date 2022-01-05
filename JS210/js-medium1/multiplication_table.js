/*
**Problem**
The following program is expected to log a multiplication table for the numbers from 1 to 10 to the console. 
Read through the code shown below. Will it produce the expected result? Why or why not?

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {     // this should be <= 10 to get the last row. otherwise should work
  let row = '';   
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

//  1  2  3  4  5  6  7  8  9 10
//  2  4  6  8 10 12 14 16 18 20
