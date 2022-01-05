/*
**Problem**
The following program is expected to log each number between 0 and 9 (inclusive) that is a multiple of 3. 
Read through the code shown below. Will it produce the expected result? Why or why not?

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// no, when i is a multiple of 3 it is not increased. A forever loop
// also i starts at 0 and will return 0 on the first iteration. not a multiple of 3 and will never increase.