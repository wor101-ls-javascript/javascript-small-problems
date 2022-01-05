// 1. Write a function named objectHasProperty that takes two arguments: an Object and a String. 
// The function should return true if the Object contains a property with the name given by the String, false otherwise.

function objectHasProperty(object, string) {
  // for (animal in object) {
  //   if (string === animal) {
  //     return true;
  //   }    
  // }

  return Object.keys(object).includes(string);
  // return false;
}


let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log('Problem 1:');
console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true
console.log('');

// 2. Write a function named incrementProperty that takes two arguments: an Object and a String. 
// If the Object contains a property with the specified name, the function should increment the value of that property. 
// If the property does not exist, the function should add a new property with a value of 1. The function should return the new value of the property.

function incrementProperty(userObject, propertyString) {
  if (Object.keys(userObject).indexOf(propertyString) !== -1) {
    userObject[propertyString] += 1;
  } else {
    userObject[propertyString] = 1;
  }
  return userObject[propertyString];
}


let wins = {
  steve: 3,
  susie: 4,
};

console.log('Problem 2:')
console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins)                               // { steve: 3, susie: 5, lucy: 1 }
console.log('');

// 3. Write a function named copyProperties that takes two Objects as arguments. 
// The function should copy all properties from the first object to the second. 
// The function should return the number of properties copied.

function copyProperties(object1, object2) {
  Object.assign(sal, hal);
  return Object.keys(sal).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log('Problem 3:');
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
console.log('');

// 4. Write a function named wordCount that takes a single String as an argument. 
// The function should return an Object that contains the counts of each word that appears in the provided String. 
// In the returned Object, you should use the words as keys, and the counts as values.

function wordCount(string) {
  let array = string.split(' ');
  let newObject = {};

  for (let index = 0; index < array.length; index += 1) {
    let wordProperty = array[index];
    if (newObject[wordProperty]) {
      newObject[wordProperty] += 1;
    } else {
      newObject[wordProperty] = 1;
    }
  }
  return newObject;
}

console.log('Problem 4:');
console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }