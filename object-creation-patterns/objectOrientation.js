// Suppose we want to use code to keep track of products in our hardware store's inventory. A first stab might look something like this:

// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 9,
//   price: 10,
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
// };

// drill.setPrice = function(newPrice) {
//   if (newPrice < 0) {
//     alert(`New price of ${newPrice} is invalid!`);
//   } 
//   this.price = newPrice;
// };

// scissors.setPrice = function(newPrice) {
//   if (newPrice < 0) {
//     alert(`New price of ${newPrice} is invalid!`);
//   } 
//   this.price = newPrice;
// }

// drill.describeProduct = function() {
//   console.log('Name: ' + this.name);
//   console.log('ID: ' + this.id);
//   console.log('Price: $' + this.price);
//   console.log('Stock: ' + this.stock);
// };

// scissors.describeProduct = function() {
//   console.log('Name: ' + this.name);
//   console.log('ID: ' + this.id);
//   console.log('Price: $' + this.price);
//   console.log('Stock: ' + this.stock); 
// };

// function setPrice(item, newPrice) {
//   if (newPrice < 0) {
//     alert(`New price of ${newPrice} is invalid!`);
//   } 
//   item.price = newPricel;
// }

// function describeProduct(item) {
//   console.log('Name: ' + item.name);
//   console.log('ID: ' + item.id);
//   console.log('Price: $' + item.price);
//   console.log('Stock: ' + item.stock);
// }

// describeProduct(scissors);

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(newPrice) {
      newPrice >= 0 ? this.price = newPrice : alert('Invalid new price!');
    },
    describeProduct() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);     
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let saw = createProduct(2, 'Circular Saw', 12, 95);
let hammer = createProduct(3, 'Sledge Hammer', 78, 45);
let boxCutter = createProduct(4, 'Box Cutter', 41, 15);

scissors.describeProduct();