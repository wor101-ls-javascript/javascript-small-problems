// 3. Alter the code in problem 2 so that it produces the desired output.

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = new Lizard();
// lizzy.scamper(); // ?

// 1. Use the method we learned above to assign foo below to a new Object with prot as its prototype.
// let prot = {};

// let foo = Object.create(prot);
// console.log(Object.getPrototypeOf(foo) === prot);
// console.log(prot.isPrototypeOf(foo));
// console.log(Object.prototype.isPrototypeOf(foo));

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);
far.a = 'hello';

console.log(far.hasOwnProperty('myProp'));
console.log(Object.getOwnPropertyNames(far));