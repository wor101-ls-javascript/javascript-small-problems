// 1. What does the following code log to the console?

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo();   // creates a new object and sets 'this' to the new object

// foo.bar();        // 2 'this' refers to the foo object and its 'a' property that was set to 2
// Foo();            // 2 'this' refers to the global object and sets its value to 2

// obj = {};
// Foo.call(obj);    // 2. 'this' now refers to the new obj and not the global window, but the a set on the global object is still in scope
// obj.bar();        // 2. 'this' refers to obj as it is being called as a method

// console.log(this.a);  // 2 as this refers to the global object

// 2. What does the following code log to the console?

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);          // NaN
// console.log(rect1.perimeter);     // NaN

// 3. Write a constructor function Circle, that takes a radius as an argument. 
// You should be able to call an area method on the created objects to get the circle's area. 
// Test your implementation with the following code:

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function() {
//   return Math.PI * (this.radius**2);
// };

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// 4. What will the following code log out and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword()); // true,  a new object with the 'swung' property and value of 'true' is created and reference by the variable ninja. 
//                                 // A new method is then added to the Ninja.prototype property. 
//                                 // when the swingSword method is called on ninja, javascript first checks ninja and does not find it
//                                 // It then checks ninja's hidden [[Prototype]] property and finds that it points to the object at Ninja.prototype
//                                 // In Ninja.prototype it then finds the swingSword method

// 5. What will the following code log out and why?
// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword());  // did not mutate original object, but set to an entire new one. ninja's hidden [[Prototype]] property still points to the original object

// 6. Implement the method described in the comments below:


// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// };

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// 7. In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true