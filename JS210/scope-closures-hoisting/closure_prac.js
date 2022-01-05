

function adder(num1) {
  function add(num2) {
    return num1 + num2;
  }
  return add;
}

let addFive = adder(5);
let addTen = adder(10);

console.log(addFive(1));
console.log(addTen(20));

let num = 9;

function addTwenty(inputNum) {
  return inputNum + 20;
}

console.log(addTwenty(num));