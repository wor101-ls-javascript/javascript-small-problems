// Write a function that logs the integers from 1 to 100 (inclusive) that are 
// multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

function multiplesOfThreeAndFive(min, max) {
  for (let number = min; number <= max ; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(number.toString() + '!');

    } else if (number % 3 === 0 || number % 5 === 0) {
      console.log(number.toString());
    } 
  }
}

multiplesOfThreeAndFive(5, 15);
