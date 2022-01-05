function arraysEqual(array1, array2) {
  let longestArrayLength;

  if (array1.length > array2.length) {
    longestArrayLength = array1.length;
  } else {
    longestArrayLength = array2.length;
  }

  for (let index = 0; index < longestArrayLength; index += 1) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
}

console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false