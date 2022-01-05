/*
**Problem**
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.



**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

function isPalindromicNumber(int) {
  let stringNum = String(int);
  let reverseNum = stringNum.split('').reverse().join('');
  return stringNum === reverseNum;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true