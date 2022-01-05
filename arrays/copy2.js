// In the previous exercise, the value of the reference gets copied. 
// For this exercise, only the values of the array should be copied, but not the reference. 
// Implement two alternative ways of doing this.

const myArray = [1, 2, 3, 4];
const myOtherArray = [];

function copy1(array) {
  let newArray = [];

  return newArray = array.slice();
}

function copy2(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    newArray[index] = array[index];
  }
  
  return newArray;
}

let newArray = copy2(myArray)
myArray.pop();
console.log(newArray);
console.log(myArray);