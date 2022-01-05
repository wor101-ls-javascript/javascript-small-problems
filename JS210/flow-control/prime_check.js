// Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.

function isPrime(number) {
  let prime = true;
  if (number < 2) {
    return false;
  } 
  
for (let index = 2; index < (number / 2); index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

  


console.log(isPrime(1));  // false
console.log(isPrime(2));  // true
console.log(isPrime(3));  // true
console.log(isPrime(43));  // true
console.log(isPrime(55)); // false
console.log(isPrime(0)); // false


// further optimization
// function isPrime(number) {
//   if (number <= 1 || (number > 2 && number % 2 === 0)) {
//     return false;
//   }

//   let divisor = 3;

//   while (divisor < number) {
//     if (number % divisor === 0) {
//       return false;
//     }

//     divisor += 2;
//   }

//   return true;
// }