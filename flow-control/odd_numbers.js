// Write a function that takes a positive integer as an argument, 
// and logs all the odd numbers from 1 to the passed in number (inclusive). 
// All numbers should be logged on separate lines.

function logOddNumbers(number) {
  for(let index = 0; index <= number; index++) {
    if (index % 2 === 1) {
      console.log(index);
    } 
  }
}

logOddNumbers(19);