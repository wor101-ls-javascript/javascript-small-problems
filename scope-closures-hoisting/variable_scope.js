// 1.
// Please predict the output of the following programs, and explain why they output what they do.

// let a = 'outer';

// function testScope() {
//   let a = 'inner';
//   console.log(a);
// }

// console.log(a);
// testScope();
// console.log(a);
// logs:
// outer
// inner
// outer

// 2.
// let a = 'outer';

// function testScope() {
//   a = 'inner';
//   console.log(a);
// }

// console.log(a);
// testScope();
// console.log(a);
// Logs:
// outer
// inner
// inner

// 3.
// let basket = 'empty';

// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }

//   console.log(basket);

//   let shop2 = function() {
//     basket = 'computer';
//   };

//   const shop3 = () => {
//     let basket = 'play station';
//     console.log(basket);
//   };

//   shop1();
//   shop2();
//   shop3();

//   console.log(basket);
// }

// goShopping();
// Logs:
// empty
// play station
// computer

// 4.
// function hello() {
//   a = 'hi';
// }

// hello();
// console.log(a);
// logs:
// 'hi' <- since a was never declared JavaScript creates a global variable

// 5.
// function hello() {
//   let a = 'hello';
// }

// hello();
// console.log(a);
// logs: error as 'a' is locally scoped to the hello function

// console.log(a);

// var a = 1;
// logs: undefined as a i hoisted to top and assigned value of undefined

// 7.
// console.log(a);

// let a = 1;
// logs: reference error, a is hoisted but not assigned a value. in the Temporal dead zone

// 8.
console.log(a);

function hello() {
  a = 1;
}
// logs: reference error, because function is never run a is not set to the global property
