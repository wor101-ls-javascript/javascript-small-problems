/*
**Problem**
Write a function that counts the number of occurrences of each element in a given array. 
Once counted, log each element alongside the number of occurrences.

**Examples / Test Cases**


**Data Structures**
- create an object
  - string name as key
  - # of occurences as value

**Algorithm**
1. create empty object
2. iterate over input array
  - if current element exists as key in object, add 1 to value 
  - otherwise add to key and set value as 1
3. get list of keys from object and iterate over it
  - for each key print to console key name and value
*/

function countOccurrences(array) {
  let count = {};

  for (let index = 0; index < array.length; index += 1) {
    let key = array[index];
    
    count[key] ? count[key] += 1 : count[key] = 1;
  }

  let keys = Object.keys(count);
  for (let index = 0; index < keys.length; index += 1) {
    let key = keys[index];
    console.log(`${key} => ${count[key]}`);
  }

}


const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2