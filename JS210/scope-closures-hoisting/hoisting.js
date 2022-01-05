// function foo() {
//   var bar = 42;
//   console.log(global.bar);
// }

// foo();


// function foo() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//   }

//   console.log(a);
//   console.log(b);
// }

// foo();

function foo() {
  if (false) {
    var a = 1;
  }

  console.log(a);
}

foo();