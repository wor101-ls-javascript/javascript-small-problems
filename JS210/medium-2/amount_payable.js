/*
**Problem**
What does the following code log? Why is this so?



**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));  // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));  // 45

// closure means that totalPayable stores a reference to startingBalance when it is defined
// when invoked it first looks to its local scope and does not find the variable
// it then looks in its closure and finds the reference to startingBalance
// startingBalance was reassigned to 5 and then 10 and t

