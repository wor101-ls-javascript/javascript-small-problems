// 1.
// function lastInArray(array) {
//   return array[array.length - 1];
// }

// a = [1,2,3,4,5];

// let ls_lastInArray = arr => arr[arr.length - 1];

// console.log(lastInArray(a));

// 2.

// function rollCall(names) {
//   for (index = 0; index < names.length; index += 1) {
//     console.log(names[index]);
//   }
// }

// let names = ['Andrew', 'Bill', 'Craig', 'David', 'Egwene'];

// rollCall(names);

// 3.

// function reverseArray(array) {
//   let newArray =[];

//   for (index = (array.length - 1); index >= 0; index -= 1) {
//     newArray.push(array[index]);
//   }
//   return newArray;
// }

// let myArray = [1,2,3,4,5];

// console.log(reverseArray(myArray));

// 4.
function arrayToString(array) {
  let newString = '';

  for (let index = 0; index < array.length; index += 1) {
    newString += String(array[index]);
  }

  return newString;
}

let myArray = [1, 'a', 2, 'b', 3];

console.log(arrayToString(myArray));