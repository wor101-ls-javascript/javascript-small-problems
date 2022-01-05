
/*
**Problem**
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will put in numbers.

**Examples / Test Cases**
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

**Data Structures**


**Algorithm**
*/

function calculateTip(bill, percent) {
  let tip = bill * (percent / 100);
  let total = bill + tip; 
  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);
}

let rlSync = require('readline-sync');
let bill = parseFloat(rlSync.question('What is the bill? '), 10);
let percent = parseFloat(rlSync.question('What is the tip percentage? ')); 

calculateTip(bill, percent);