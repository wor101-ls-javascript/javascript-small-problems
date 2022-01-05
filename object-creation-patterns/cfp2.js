// 1. Follow the steps below:

//  1. Create an object called shape that has a getType method.
//  2. Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have four own properties: a, b, c (representing the sides of a triangle), and type.
//  3. Add a new method to the prototype called getPerimeter.

// Test your implementation with the following code:

// let shape = {
//   getType() {
//     return this.type;
//   },
// };

// function Triangle(a, b, c) {
//   this.type = 'triangle'
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   return this;
// }

// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// };


// let t = new Triangle(3, 4, 5);
// t.constructor = Triangle;
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// //t.getType();                   // "triangle"

// 2. Since a constructor is just a function, it can be called without the new operator, and this can lead to unexpected results and errors especially for inexperienced programmers.

// Write a constructor function that can be used with or without the new operator, and return the same result in either form. Use the code below to check your solution:

// function User(first, last) {
//   // this.first = first;
//   // this.last = last;
//   // this.name = first + ' ' + last;
//   // return this;
//   // return {
//   //   first,
//   //   last,
//   //   name: first + ' ' + last,
//   // }
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }
//   this.name = first + ' ' + last;
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// 3. Create a function that can create an object with a given object as its prototype, without using Object.create.

// function createObject(obj) {
//   // let newObject = {};
//   // newObject.__proto__ = obj;
//   // Object.setPrototypeOf(newObject, obj)
//   // return newObject;
//   function SetProtoFunc() {}
//   SetProtoFunc.prototype = obj;
//   console.log(Object.getPrototypeOf(SetProtoFunc) === Function.prototype);
//   console.log(SetProtoFunc.prototype === obj)
//   return new SetProtoFunc();
// }



// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log()
// console.log(foo.isPrototypeOf(bar));         // true

// 4. Similar to the problem above, without using Object.create, create a begetObject method that you can call on any object to create an object inherited from it:

// Object.prototype.begetObject = function() {
//   function F(){}
//   F.prototype = this;
//   return new F();
// }

// let foo = {
//   a: 1,
// };

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

// 5. Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.

function neww(constructor, args) {
  // create a new object
  // set its __proto__ [[Prototype]] to .prototype property of the conctructor
  // set its constructor to function
  let newObject = Object.create(constructor.prototype);
  newObject.constructor = constructor;
  
  constructor.apply(newObject, args);
  return newObject;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);

john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}
