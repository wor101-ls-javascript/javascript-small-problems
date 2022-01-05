// logValue();

// function logValue() {
//   console.log('Hello, world!');
// }

// 'Hello, world'
// Prior to execution JavaScript hoists variables (including functions) to the top of their scope
// Therefore the function logValue can be executed despite the function declaration appearing after the call in the code

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// string
// functions declarations are hoisted above variables by JavaScript