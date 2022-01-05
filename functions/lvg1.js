// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// Output: 'This is global'
// the var Myvar created within the function shadows the global variable and is scoped at the function level