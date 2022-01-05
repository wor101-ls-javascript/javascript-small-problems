// Please predict the output of the following programs, and explain why they output what they do.

// 1.
// function say() {
//   if (false) {
//     var a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say();
// logs: undefined
// the var variable a is hoisted in creation and assigned value of undefined, but the statement assigning the string is never executed.
// Need to note, var is FUNCTION-LEVEL and not block-level, so hoisted above if(false) statement

//2.
// function say() {
//   if (false) {
//     let a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say();
// log: reference error. The let variable is is block level and hoisted to top of block, but never executed

//3.
// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     var a = 'hello again';
//   }
// }

// hello();
// console.log(a);
// logs:
// hello
// referenc error <- var on line 6 is FUNCTION LEVEL  scope and hosited to top of function. Therefore not accessible

// 4.
// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     let a = 'hello again';
//   }
// }

// hello();
// console.log(a);
// logs: 
// hello
// hello <- let a is blocked scoped and therefore a has no globaal scope BUT the original a on line two is not delcared anywhere and so by default assigned to global object

// 5.
// var a = 'hello';

// for (var index = 0; index < 5; index += 1) {
//   var a = index;
// }

// console.log(a);
// logs: 4 <- the var a in the for statement gets hoisted to global scope since it is FUNCTION scoped and not block scoped

// 6.
// let a = 'hello';

// for (let index = 0; index < 5; index += 1) {
//   let a = index;
// }

// console.log(a);
// logs: hello <- the let variable in the for statement is block scoped and therefore shadowed by the globaly scoped a variable on line 1

// 7.
// let a = 1;

// function foo() {
//   a = 2;
//   let bar = function() {
//     a = 3;
//     return 4;
//   };

//   return bar();
// }

// console.log(foo());
// console.log(a);
// logs:
// 4 <- retgurned by bar()
// 3 <- the global variable let a is reassigned to value 2 and then 3

// 8.
// var a = 'global';

// function checkScope() {
//   var a = 'local';
//   const nested = function() {
//     var a = 'nested';
//     let superNested = () => {
//       a = 'superNested';
//       return a;
//     };

//     return superNested();
//   };

//   return nested();
// }

// console.log(checkScope());
// console.log(a);
// logs:
// supernested
// global

// 9.
// let a = 'outer';
// let b = 'outer';

// console.log(a);
// console.log(b);
// setScope(a);
// console.log(a);
// console.log(b);

// function setScope(foo) {
//   foo = 'inner';
//   b = 'inner';
// }
// logs:
// outer
// outer
// outer <- function arguments become local variables to the function and value of the original variable is not changed
// inner

// 10.
// let total = 50;
// let increment = 15;

// function incrementBy(increment) {
//   total += increment;
// }

// console.log(total);
// incrementBy(10);
// console.log(total);
// console.log(increment);
// logs:
// 50
// 65
// 15

// 11.
let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};
// logs:
// outer
// Error <- the var setScope is hoisted and assigned undefined and function has not yet been assigned when called on line 4