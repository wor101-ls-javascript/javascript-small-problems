// Our earlier implementation of the Function.prototype.bind was simplistic. 
// Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. 
// It's called partial function application. Read this assignment and the MDN documentation to learn more about partial function application.

// Alter the myBind function written in the previous exercise to support partial function application.

function myBind(func, context, ...partialArgs){
  return function(...args) {
    const fullArgs = partialArgs.concat(args);
    return func.apply(context, fullArgs);
  };
}

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);
console.log(addFive(10));