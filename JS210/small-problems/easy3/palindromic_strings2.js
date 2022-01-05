/*
**Problem**
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. 
If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. turn string to lowercase
2. replace all non-alphanumeric characters with ''
3. pass cleaned string to isPalindrome function and return result
*/

function isPalindrome(string) {
  array1 = string.split('')
  array2 = array1.slice().reverse();

  return array1.join() === array2.join();
}

function isRealPalindrome(string) {
  let lowerCaseString = string.toLowerCase();
  let cleanString = removeNonLetterNumbers(lowerCaseString);

  console.log(cleanString);
  return isPalindrome(cleanString);

}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    if (isLetter(string[index]) || isNumber(string[index])) {
      result += string[index];
    }
  }
  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false