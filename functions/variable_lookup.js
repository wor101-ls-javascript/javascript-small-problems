var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// 'This is global'
// When someFunction is declared on line 3 it creates a closure that includes all the variables it will need that are within its scope
// the myVar on line 1 is within someFunctions scope and included in the closure
// When someFunction is called on line 7 line 4 is finally executed
// No local myVar variable is found within someFunction so JavaScript looks in the closure and finds myVar that had been added from line 1