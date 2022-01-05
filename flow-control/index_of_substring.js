
/*
**Problem**
Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

  - The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, 
    and returns the index of the character where that substring begins.

  - The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, 
    and returns the index of the character where that substring begins.

  - Both functions return -1 if firstString does not contain the substring specified by secondString.

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. 
However, you may not use any other properties or methods from JavaScript's built-in String class.

Looks like capitalization matters
white space counts

**Examples / Test Cases**

function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1


**Data Structures**


**Algorithm**
INDEXOF:
1. determine length of secondString
3. creaete a local variable called match and set to true
2. create a for loop to iterate over the characters in firstString
  - for each character check to see if it matches the first character in secondString
  - if it matches create a new loop to iterate through secondString character
    - check each second string character against the first string
      (increase the index of each by 1 with each iteration)
    - if no match then 
      -set 'match' variable to false
      - break for secondString for loop
    - if index is on final character in secondString and there is a match
      - return current index of firstString for loop
3. If nothing returned at this point return -1 

LASTINDEXOF cheat!:
1. copy and paste indexOf and rename to lastIndexOf
2. instead of returning firstIndex, add it to an array of matches that already includes -1
3. at end of function pop off and return the last element of the array


*/

function indexOf(firstString, secondString) {
  for (let firstIndex = 0; firstIndex < firstString.length; firstIndex += 1) {

    for (let secondIndex = 0; secondIndex < secondString.length; secondIndex += 1) {
      let secondChar = secondString[secondIndex];

      if (secondChar !== firstString[firstIndex + secondIndex]) {
        break;
      } else if (secondIndex === (secondString.length - 1)) {
        return firstIndex;
      }
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let matches = [-1];

  for (let firstIndex = 0; firstIndex < firstString.length; firstIndex += 1) {

    for (let secondIndex = 0; secondIndex < secondString.length; secondIndex += 1) {
      let secondChar = secondString[secondIndex];

      if (secondChar !== firstString[firstIndex + secondIndex]) {
        break;
      } else if (secondIndex === (secondString.length - 1)) {
        matches.push(firstIndex);
      }
    }
  }
  return matches.pop();
}


console.log(indexOf('Some strings', 's'));    // 5
console.log(indexOf('Blue Whale', 'Whale'));  // 5
console.log(indexOf('Blue Whale', 'Blute'));  // -1
console.log(indexOf('Blue Whale', 'leB'));    // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1