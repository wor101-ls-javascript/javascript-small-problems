// let library = (function() {
//     let items = [];
//     return {
//       addItem(item) {
//         items.push(item);
//       },

//       deleteItem(item) {
//         let index = items.getIndexOf(item);
//         items.splice(index, 1);
//       },

//       listItems() {
//         items.forEach(item => console.log(item));
//       },
//     }
// })();

function library(name) {
  let items = [];

  this.name = name;

  this.addItem = function(item) {
    items.push(item);
  };

  this.deleteItem = function(item) {
    let index = items.getIndexOf(item);
    items.splice(index, 1);
  }

  this.listItems = function() {
    items.forEach(item => console.log(item));
  }
}

let gameLibrary = new library("Will's Games");
let booksLibrary = new library("Will's Books");

gameLibrary.addItem('Seikatsu');
gameLibrary.addItem('Azul');
gameLibrary.listItems();
booksLibrary.listItems();
console.log('');
booksLibrary.addItem('A Distant Mirror');
booksLibrary.addItem('The Bomber Mafia');
booksLibrary.addItem('Turings Cathedral');
booksLibrary.listItems();
console.log(booksLibrary.items);

let myObject = {
  init(name, type, cost) {
    this.name = name;
    this.type = type;
    this.cost = cost;
    return this;
  },

  sayHello() {
    console.log('Hello this is ' + this.name);
  },

  addCost(num) {
    this.cost += num;
  },
};

let obj1 = Object.create(myObject).init('Rocky', 'Cat', 1);
let obj2 = Object.create(myObject).init('Boston', 'Cat', 3);
let obj3 = Object.create(myObject).init('Rosie', 'Dog', 20);
obj1.sayHello();
obj2.sayHello();
obj3.sayHello();
console.log(Object.getPrototypeOf(obj1) === myObject);
console.log(obj1.constructor === Object);
console.log('');

// let private = (function(){
//   let privateArray = [];
//   return {
//     add(item) {
//       privateArray.push(item);
//     },

//     getItems() {
//       return privateArray;
//     },
//     public: 'Hello',
//   };
// })();

// console.log(private);

// let myPrivate = Object.create(private);
// console.log(myPrivate === private);
// console.log(myPrivate.getItems() === private.getItems());
// console.log(myPrivate.getItems());


let private = function() {
  let array = [];
  return {
    add(item) {
      array.push(item);
    },
    list() {
      console.log(array);
    },
  };
};

let a = private();
console.log(typeof a);
// a.add = function(item) {
//   array.push(item);
// };

console.log(Object.getOwnPropertyNames(a));
a.add('Goblin');
a.list();
