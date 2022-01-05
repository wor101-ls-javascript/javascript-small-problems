// Write a function that iterates over the integers from 1 to 100, inclusive. 
// For multiples of three, log "Fizz" to the console. 
// For multiples of five, log "Buzz". For numbers which are multiples of both three and five, log "FizzBuzz". 
// For all other numbers, log the number.

function fizzBuzz() {
  for (let number = 1; number <= 100; number += 1) {
    message = number;

    if (number % 3 === 0 && number % 5 === 0) {
      message = 'FizzBuzz';
    } else if (number % 3 === 0) {
      message = 'Fizz';
    } else if (number % 5 === 0) {
      message = 'Buzz';
    } 
    console.log(message);
  }
}

fizzBuzz();