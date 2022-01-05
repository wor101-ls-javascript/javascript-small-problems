function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// 'This is global'
// When a variable is not declared in the local scope and not found in the global scope, JavaScript will create a global variable for it.
// Not technically creating a global variable, but binding it to  a property of the global object.