// pseudo-classical pattern
// combination of constructor functions and prototypal inheritance

// function PetStore(animals) {
//   this.animals = animals;
// }

// PetStore.prototype.listAnimals = function() {
//   console.log(this.animals);
// };

// PetStore.prototype.addAnimal = function(animal) {
//   this.animals.push(animal);
// };

// PetStore.prototype.sellAnimal = function(animal) {
//   let index = this.animals.indexOf(animal);
//   return this.animals.splice(index, 1);
// };

// let myPetStore = new PetStore(['Dog', 'Cat']);
// myPetStore.listAnimals();
// myPetStore.addAnimal('Bird');
// myPetStore.listAnimals();
// myPetStore.addAnimal('Lizard');
// myPetStore.sellAnimal('Bird');
// myPetStore.listAnimals();
// console.log(PetStore.prototype.isPrototypeOf(myPetStore));
// console.log(myPetStore.constructor === PetStore);
// console.log('');
// let badPetStore = Object.create(myPetStore);
// badPetStore.addAnimal('Snake');
// badPetStore.addAnimal('Spider');
// badPetStore.listAnimals();
// myPetStore.listAnimals();
// myPetStore.sellAnimal('Dog');
// badPetStore.listAnimals();
// console.log(badPetStore.__proto__ === myPetStore);
// console.log(badPetStore.hasOwnProperty('animals'));
// console.log(myPetStore.hasOwnProperty('animals'));
// let newPetStore = new PetStore(['Monkey', 'Gerbil']);
// myPetStore.listAnimals();
// newPetStore.listAnimals();
// newPetStore.addAnimal('Iguana');
// newPetStore.listAnimals();


// OLOO patter Objects linking to other objects pattern
// let NewGame = {
//   description() {
//     console.log('Name: ' + this.gameName);
//     console.log('Type: ' + this.type);
//     console.log('Cost: $' + this.cost);
//   },

//   init(gameName, type, cost) {
//     this.gameName = gameName;
//     this.type = type;
//     this.cost = cost;
//   },
// };

// let heroQuest = Object.create(NewGame) // .init('HeroQuest', 'DungeonCrawler', '40');
// heroQuest.init('HeroQuest', 'DungeonCrawler', 40);
// console.log(NewGame.isPrototypeOf(heroQuest));
// heroQuest.description();
// console.log(Object.getOwnPropertyNames(heroQuest));
// console.log(Object.getPrototypeOf(heroQuest) === NewGame);
// console.log(heroQuest.gameName);

// class pattern

class Game {
  constructor(gameName, type, cost) {
    this.gameName = gameName;
    this.type = type;
    this.cost = cost;
    this.privateData = (function() {
      let secrets = [];
      return {
        getSecrets() {
          secrets.forEach(secret => console.log(secret));
        },
        addSecret(secret) {
          secrets.push(secret);
        },
      }
    })();
  }

  description() {
    console.log('Name: ' + this.gameName);
    console.log('Type: ' + this.type);
    console.log('Cost: $' + this.cost);
  }




}

let heroQuest = new Game('HeroQuest', 'DungeonCrawler', 45);
let coreSpace = new Game('Core Space', 'Miniature Skirmish', 80);
heroQuest.description();
coreSpace.description();
console.log(Object.getPrototypeOf(coreSpace) === Game.prototype);
console.log(coreSpace.constructor === Game);
console.log(Game.constructor === Function);

heroQuest.privateData.addSecret('Gargoyle');
heroQuest.privateData.getSecrets();
coreSpace.privateData.addSecret('Live One');
coreSpace.privateData.getSecrets();
console.log('');

// Pseudo-classical private data
function newObject(objName, objType) {

  this.objName = objName;
  this.objType = objType;
}

newObject.prototype
