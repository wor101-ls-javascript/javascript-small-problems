// // IIFE Immediate Invocation Function Expression
// // Private data example
// let myData = (function(){
//   let mySecrets = [];
//   return {
//     getSecrets() {
//       console.log(mySecrets);
//     },

//     addSecret(newSecret) {
//       mySecrets.push(newSecret);
//     },
//   };
// })();

// console.log(myData);
// console.log(myData.mySecrets);
// myData.addSecret('Rocky smells bad');
// myData.addSecret('Rocky needs a bath');
// myData.getSecrets();
// console.log('');

// // IIFE Immediate Invocation Function Expression
// // Private scope example
// let var1 = 1;
// let var2 = 2;

// (function() {
//   let var1 = 5;
//   let var2 = 10;
//   console.log(var1 + var2);
// })();
// console.log('');


// // Partial function application

// // save an arg 
// function generator(arg1) {
//   return function(arg2) {
//     return arg1 + arg2;
//   }
// }

// let add5 = generator(5);
// console.log(add5(10));
// console.log(add5(20));
// console.log('');

// // pass function as arg
// function gen(func, arg1) {
//   return function(arg2) {
//     return func(arg1, arg2);
//   }
// }

// function multiply(arg1, arg2) {
//   return arg1 * arg2;
// }

// let multiplyBy3 = gen(multiply, 3);
// console.log(multiplyBy3(20));
// console.log(multiplyBy3(33));
// console.log('');

// More private data practice

function GamesLibrary(libraryName) {
  let games = [];

  this.libraryName = libraryName;

  this.addGame = function(game) {
    games.push(game);
  }

  this.listGames = function(game) {
    games.forEach(game => console.log(game));
  }
} 

let willsGames = new GamesLibrary("Will's Boardgames");

console.log(willsGames.games);
willsGames.addGame('SpaceHulk');
willsGames.addGame('Fireball Island');
willsGames.listGames();
console.log('');

let russGames = new GamesLibrary("Russ's Boardgames");
russGames.listGames();
russGames.addGame('Talisman');
russGames.listGames();


