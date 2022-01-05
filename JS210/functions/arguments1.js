let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// 7
// when myValue is envoked on line 7 a new execution environment is created that accepts the value of the parameter
// A new local variable 'b' is created and assigned the value of the argument (in this case 7)
// After line 4 is finished executing, the instance is destoryed along with the local variable 'b'
// The global variable 'a' remains 7 as it was never changed.