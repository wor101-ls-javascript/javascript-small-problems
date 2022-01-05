/*
**Problem**
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

**Examples / Test Cases**
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

**Data Structures**
- input integer
- output strings

**Algorithm**
1. create for loop that with index starting at 1 and continuing until equals input integer
  - add inputInt - current index of ' ' to a string
  - add current index number of '*' to string
  - log string to console
*/

function triangle(int) {
  for (let index = 1; index <= int; index += 1) {
    let line = ' '.repeat(int - index) + '*'.repeat(index);
    console.log(line);
  }
}

triangle(5);
console.log('');
triangle(9);