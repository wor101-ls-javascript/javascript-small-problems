/*
**Problem**
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

**Examples / Test Cases**
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

**Data Structures**


**Algorithm**
1. split the inputString into an array of characters
2. make a copy of the array and reverse it
3. iterate through the first array
  - check each character to see if it is equal to the character at the same index position in the second array
      - if no, return false
  ----or rejoin arrays and check to see if strings are equal??

4. return true
*/

function isPalindrome(string) {
  array1 = string.split('')
  array2 = array1.slice().reverse();

  // for (let index = 0; index < array1.length; index += 1) {
  //   if (array1[index] !== array2[index]) {
  //     return false;
  //   }
  // }
  // return true;

  return array1.join() === array2.join();
}


console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true