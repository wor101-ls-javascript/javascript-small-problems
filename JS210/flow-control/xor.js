// For boolean values, the || operator returns true if either or both of its operands are true, 
// false if both operands are false. The && operator, on the other hand, returns true if both of 
// its operands are true, and false if either operand is false. This works great until you need 
// only one of two conditions to be true, the so-called "exclusive or", or XOR.

// Write a function named isXor that takes two arguments, and returns true if exactly one argument is truthy, 
// false otherwise. Your function should work with the boolean values of true and false, 
// but also any JavaScript values based on their "truthiness".

function isXor(arg1, arg2) {
  if (arg1 && arg2 || !arg1 && !arg2) {
    return false;
  } else if (arg1 || arg2) {
    return true;
  } else {
    return false;
  }
}

console.log(isXor(false, true));      // true
console.log(isXor(true, false));      // true
console.log(isXor(false, false));     // false
console.log(isXor(true, true));       // false

console.log(isXor(false, 3));         // true
console.log(isXor('a', undefined));   // true
console.log(isXor(null, ''));   // false
console.log(isXor('2', 23));          // false

// refactored ls solution:
// function isXor(value1, value2) {
//   return !!((value1 && !value2) || (value2 && !value1));
// }
//  NOTE taht the !! is used to ensure boolean value. Must remember the logical operators return value of operands and not boolean value

// refactored ls 2"
// function isXor(value1, value2) {
//   return Boolean(value1) !== Boolean(value2);
// }