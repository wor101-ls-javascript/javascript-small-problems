/*
**Problem**
The processOrder function shown below accepts the following arguments: price, quantity, discount, serviceCharge and tax. 
Any arguments other than price may be omitted when calling the function, in which case, default values will be assigned.

This function uses conditional statements to test whether arguments have been omitted. 
When an argument is omitted, JavaScript automatically initializes it to a value of undefined. 
The function takes advantage of this behavior by setting undefined arguments to a default value.

The following variation of the processOrder function has the same behavior as the first:

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}


// Alternate implementation:
// function processOrder(price, quantity, discount, serviceCharge, tax) {
//   quantity = quantity || 1;
//   discount = discount || 0;
//   serviceCharge = serviceCharge || 0.1;
//   tax = tax || 0.15;

//   return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
// }

console.log(processOrder(100));      // 126.5

// 0 defaults to a falsy value in JavaScript, better to test for undefined than to test for truthiness