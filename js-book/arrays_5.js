function findIntegers(array) {
  let newArray = array.filter(num => Number.isInteger(num));
  return newArray;
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]