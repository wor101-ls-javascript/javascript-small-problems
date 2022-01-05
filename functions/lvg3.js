var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// 'THis is local'
// when someFunction is executed the program looks for a locally scoped myVar.
// It finds none so then looks for a myVar included in someFunctions closure
// it finds it in the globally scoped myVar on line 1 and assigns a new value to the variable