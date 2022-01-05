var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// 'This is local'
// console.log is passed myVar as an argument
// The execution looks first looks for a locally scoped myVar variable and finds it within the function someFunction
