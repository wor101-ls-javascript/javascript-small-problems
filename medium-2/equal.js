/*
**Problem**
Read through the following code. Currently, it does not log the expected result. 
Explain why this happens, then refactor the code so that it works as expected.


**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// this doesn't work because when comparing objects with the strict equality operator '===', JavaScript only returns true if both objects are the SAME object

console.log(person.name === otherPerson.name);

function equalObjects(object1, object2) {
  let keys = Object.keys(object1);
  if (keys.length !== Object.keys(object2).length) {
    return false;
  }

  for (let index = 0; index < keys.length; index += 1) {
    // if (typeof object1[key] === 'object') {
    //   equalObjects(object1, object2);
    // }

    if (object1[keys[index]] !== object2[keys[index]] ) {
      return false;
    }
  }
  return true;
}

console.log(equalObjects(person, otherPerson))