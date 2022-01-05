let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

let obj2 = Object.create(obj1);
// prototypes and chains for Objects
// when we create new Objects with Object.create() we set a prototype chain
// The new object stores the reference to the prototype object in __proto__ / hidden property [[Prototype]]
// the prototype object is the entire object that was used to create the new object
// The chain ends with Object.prototype (BUT none of the objects will have a prototype property by default, only constructor functions?)

// console.log(Object.getPrototypeOf(obj2) === obj1);
// console.log(obj1.isPrototypeOf(obj2));
// console.log(Object.prototype.isPrototypeOf(obj1));
// console.log(obj2.__proto__ === obj1);
// console.log(Object.prototype.isPrototypeOf(obj2));

obj2.myFunction = function() {
  console.log('Hello from myFunction!');
};
// obj2.myFunction();
obj1.otherFunction = function () {console.log('Hello from OTHER FUNCTION')};
// obj1.otherFunction();
// obj2.otherFunction();

let obj3 = Object.create(obj2);
// console.log(obj1.isPrototypeOf(obj3));
// console.log(Object.getOwnPropertyNames(obj3));
// console.log(Object.getOwnPropertyNames(obj2));
// console.log(Object.getOwnPropertyNames(obj1));
// console.log(obj2.hasOwnProperty('myFunction'));

// prototypes and constructor functions
function CreatePetStore(){
  this.pets = {
    dog: 20,
    cat: 10,
    trashpanda: 0,
  };
  this.listPets = function() {
    Object.keys(this.pets).forEach(function(key) { console.log(key + ' costs ' + this.pets[key])}, this);
  };
}

let store1 = new CreatePetStore();

CreatePetStore.prototype.addPet = function(type, price) {
  this.pets[type] = price;
};

store1.listPets();
console.log(Object.getPrototypeOf(store1) === CreatePetStore.prototype);
console.log(Object.getPrototypeOf(CreatePetStore));
console.log(Object.prototype.isPrototypeOf(CreatePetStore));
store1.addPet('turtle', 5);
store1.listPets();
console.log('');

// mixing object and function creation
let store2 = Object.create(store1);
// store2.listPets();
// console.log(store1.isPrototypeOf(store2));
// console.log(CreatePetStore.prototype);
// console.log(Object.getPrototypeOf(store2) === store1);    // store2 object was created from store1, therefore the __proto__ / [[Prototype]] proprety references store1 object
// console.log(Object.getPrototypeOf(store1) === CreatePetStore);      // store1 created from Constructor function, therefore THE FUNCTION IS NOT THE PROTOTYPE, 
// console.log(Object.getPrototypeOf(store1) === CreatePetStore.prototype);  // since store1 created from a Constructor function, a prototype property on the constructor function is automatically created, store1's __proto__ [[Prototype]] property references the Constructor functions prototype object!

// back to creating new objects from constructor function
let store3 = new CreatePetStore();
store3.listPets();
console.log(store3.__proto__);
console.log(Object.getPrototypeOf(store3));
console.log(Object.getPrototypeOf(store3) === CreatePetStore.prototype);
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getPrototypeOf(CreatePetStore) === Function.prototype);


// constructor property
// console.log(store3.constructor);
// console.log(store3.constructor === CreatePetStore);     // each object created when new used by a constructor function (INCLUDING the constructor function) is automatically give a constructor property
// console.log(CreatePetStore.constructor === Function);   // The constructor property references the Function that created it. The chain ends at the Function function
// console.log('');
// objects created with Object.create and the constructor function
// console.log(obj3.constructor);  //  Objects NOT created by constructor function, always have a constructor property that points to the Object function
// console.log(obj2.constructor === Object);


// Objects
// Objects created from other objects using the Object.create() method:
//   - have their __proto__ / [[Prototype]] property set to reference the object used to create it 
//     - chain ends with Object.prototype
//   - have their constructor property set to the Object function itself

// Objects created from constructor Functions when new keyword is used:
//   - have their __proto__ / [[Prototype]] property set to the object referenced by the constructor Functions .prototype property
//     - this .prototype property itself contains a __proto__ / [[Prototype]] property that references the .prototype property of the function that created the constructor function
//     - the end of the chain is the object reference by Objects.prototype
//  - the constructor property references the Function that created the object, the end of the chain is the Function function
// 