// Write a function named checkGoldbach that uses Goldbach's Conjecture 
// to log every pair of primes that sum to the number supplied as an argument. 
// The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". 
// The function takes as its only parameter, an integer expectedSum, 
// and logs all combinations of two prime numbers whose sum is expectedSum. 
// Log the prime pairs with the smaller number first. 
// If expectedSum is odd or less than 4, your function should log null.

// Your checkGoldbach function may call the isPrime function you wrote for a previous practice problem.


function isPrime(num) {
  let max = Math.floor(num / 2);
  if (num < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= max; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
}

function getPrimesUpTo(maximum) {
  let primes = [2];
  for (let int = 3; int < maximum; int += 2) {
    if (isPrime(int)) {
      primes.push(int);
    }
  }
  return primes;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  } else if (expectedSum === 4) {
      console.log('2 2');
      return;
  }

  let primes = getPrimesUpTo(expectedSum);
  while (primes.length > 0) {
    firstNum = primes.shift();

    primes.forEach(secondNum => {
      if (firstNum + secondNum === expectedSum) {
        console.log(firstNum + ' ' + secondNum)
      }
    });
  }
}

console.log(isPrime(2));

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53


// LS answer
// let checkGoldbach = function(expectedSum) {
//   if (expectedSum < 4 || expectedSum % 2 === 1) {
//     console.log(null);
//     return;
//   }

//   let num1 = 1;
//   let num2;

//   do {
//     num1 += 1;
//     num2 = expectedSum - num1;
//     if (isPrime(num1) && isPrime(num2)) {
//       console.log(num1, num2);
//     }

//   } while (num1 !== num2);
// };