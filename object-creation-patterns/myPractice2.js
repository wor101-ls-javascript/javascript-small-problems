let myObj = {
  a: 'monkey',
};

// console.log(myObj.constructor === Object);
// console.log(myObj.__proto__);
// console.log(Object.prototype.isPrototypeOf(myObj));
// console.log(Object.constructor === Function);
// console.log(Function.constructor === Function);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Object.getOwnPropertyNames(Function.prototype));
// console.log(Object.getOwnPropertyNames(Function.prototype.__proto__));
// console.log(Function.prototype.__proto__.constructor === Object);
// console.log(Function.prototype.__proto__.constructor.prototype === Object.prototype);
// console.log(Function.prototype.__proto__.constructor.prototype.__proto__);
// Object.prototype is last link in chain
// Object.prototype.__proto__ === null

function UserCreator(name, points) {
  this.name = name;
  this.points = points;
}

UserCreator.prototype.add = function() {
  this.points += 1;
};

let user = new UserCreator('Will', 5);

console.log(user.__proto__ === UserCreator.prototype);
console.log(user.__proto__.__proto__ === Object.prototype);
console.log(UserCreator.__proto__ === Function.prototype);