// What will the code below output to the console?

// let message = 'Hello from the global scope!';

// function func(message) {
//   message = 'Hello from the function scope!';
//   console.log(message); // 'Hello from the function scope!'
// }

// func(message);
// console.log(message); // 'Hello from the global scope!' // variable is shadowed in local scope

// What will the code below log to the console? What does this output demonstrate in relation to the output of problem one?

// let myObj = { message: 'Greetings from the global scope!' };

// function func(obj) {
//   obj.message = 'Greetings from the function scope!';
//   console.log(obj.message);
// }

// func(myObj);

// console.log(myObj.message); // 'Greetings fromt he function scope!'
// this demonstrates the mutability of objects

// What will the code below log to the console?

// let message = 'Hello from the global scope!';

// function func() {
//   message = 'Hello from the function scope!';
//   console.log(message); // 'Hello from the function scope!'
// }

// func();
// console.log(message); // 'Hello from the function scope!'
// in this example, a local variable message is not created by the existence of a parameter
// therefore JavaScript looks in its closure for a variable with name 'message' and finds the variable outside the function

// // What will the code below log to the console?
// let a = 10;
// let obj = {
//   a
// }

// let newObj = obj;
// newObj.a += 10;

// console.log(obj.a === a);  // false
// console.log(newObj.a === obj.a); // true
// newObj points to obj, and the are the same object in memory
// when updating 'a' in newObj, we are also updating 'a' in obj as it is the SAME 'a'

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true
// a new object is assigned to animal AFTER animal is assigned to warthog and BEFORE animal is assigned to meerkat