/*
**Problem**
In the following code, a user creates a person object literal and defines two methods for returning the person's first and last names. 
What is the result when the user tries out the code on the last line?

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);  // logs the whole function as missing parentheses for methods
console.log(`${person.firstName()} ${person.lastName()}`); 