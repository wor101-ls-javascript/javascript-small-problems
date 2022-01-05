// Create a function that computes the Greatest Common Divisor of two positive integers.

// function gcd(num1, num2) {
//   let max = Math.max(num1, num2);
//   let min = Math.min(num1, num2);

//   let divisor = min;
//   while (max % divisor !== 0 || min % divisor !== 0) {
//     divisor -= 1;
//   }
//   return divisor;
// }



// Euclid's algorithm
function gcd(num1, num2) {
  while (num1 != num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    num1 = max - min;
    num2 = min;
  }
  return num1;
}


// Euclid's algorithm
function gcdArray(array) {
  let greatestCommonDenominator = array[0];

  for (let index = 0; index < (array.length - 1); index += 1) {
    greatestCommonDenominator = gcd(greatestCommonDenominator, array[index + 1])
  }
  return greatestCommonDenominator;
}


// console.log(gcd(12, 4));
// console.log(gcd(15, 10));
// console.log(gcd(9, 2));


// console.log(gcd(4, 12));
// console.log(gcd(10, 15));
// console.log(gcd(2, 9));

console.log(gcdArray([12, 8, 4]));
console.log(gcdArray([4, 12]));
console.log(gcdArray([10, 15]));
console.log(gcdArray([2, 9]));

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1