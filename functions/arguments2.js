let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// 7
// because 'a' is given as a parameter in the myValue function, it will always shadow the globally declared 'a' on line 1