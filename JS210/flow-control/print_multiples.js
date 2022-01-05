// Write a function logMultiples that takes one argument number. 
// It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. 
// Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

// function logMultiples(number) {
//   for (let multiple = 99; multiple >= 0; multiple -= 2) {
//     if (multiple % number === 0) {
//       console.log(multiple);
//     }
//   }
// }

function logMultiples(number) {
  let largestMultiple = Math.floor(100 / number) * number;

  for (; largestMultiple >= number; largestMultiple -= number) {
    if (largestMultiple % 2 === 1) {
      console.log(largestMultiple);
    }
  }
}


console.log('Multiples of 5:');
logMultiples(5);
console.log('Multiples of 17:');
logMultiples(17);
console.log('Multiples of 21:');
logMultiples(21);

// Find the largest multipe of a number between 0 and 100 using 'Math.floor(100 / number) * number'