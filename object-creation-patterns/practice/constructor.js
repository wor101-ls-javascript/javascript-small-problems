// function Character(name, alignment) {
//   this.name = name;
//   this.alignment = alignment;
// }

// Character.prototype.description = function() {
//   return this.name + 'is a' + this.alignment;
// };

// function CharClass(name, alignment, className, level) {
//   Character.call(this, name, alignment);
//   this.className = className;
//   this.level = level;
// }

// CharClass.prototype.classDescription = function() {
//   return this.description() + ' level ' + this.level + ' ' + this.className; 
// };

// function SubClass(name, alignment, className, level, subClassName) {
//   CharClass.call(this, name, alignment, className, level);
//   this.subClassName = subClassName
// }

// SubClass.prototype.subClassDescription = function() {
//   return /*this.classDescription()  + */' of ' + this.subClassName;
// };

// let theon = new SubClass('Theon', 'Neutral', 'Bard', 12, 'College of Swords');

// console.log(theon);

// console.log(theon.subClassDescription());
// console.log(SubClass.prototype.isPrototypeOf(theon));
// console.log(CharClass.prototype.isPrototypeOf(SubClass));
// console.log(SubClass.__proto__);

// function Brick() {
//   this.width = 10;
//   this.height = 20;
// }

// function BlueGlassBrick() {
//   Brick.call(this);

//   this.opacity = 0.5;
//   this.color = 'blue';
// }

// Brick.prototype.throw = function() {
//   console.log('You throw the brickt the window!');
// }

// BlueGlassBrick.prototype = Object.create(Brick.prototype);
// let blueBrick = new BlueGlassBrick();
// console.log(blueBrick.width);
// console.log(BlueGlassBrick.prototype.isPrototypeOf(blueBrick));
// console.log(Brick.prototype.isPrototypeOf(BlueGlassBrick));
// console.log(blueBrick.constructor);
// console.log('');

// blueBrick.throw();
// console.log(BlueGlassBrick.constructor);
// BlueGlassBrick.constructor = Brick;
// console.log(BlueGlassBrick.constructor);
// console.log(BlueGlassBrick.__proto__ === Function.prototype);


let StatBlock = {
  init(str, dex, con, int, wis, cha) {
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
  },

  displayStats() {
    console.log('Str: ' + this.str);
    console.log('Dex: ' + this.dex);
    console.log('Con: ' + this.con);
    console.log('Int: ' + this.int);
    console.log('Wis: ' + this.wis);
    console.log('Cha: ' + this.cha);
  },
};

let CharClass = Object.create(StatBlock);

CharClass.init = function(str, dex, con, int, wis, cha, className) {
  StatBlock.init.call(this, str, dex, con, int, wis, cha);
  this.className = className;
};

CharClass.getClass = function() {
  console.log(this.className);
};

let fighter = Object.create(CharClass);
fighter.init(18, 12, 14, 6, 8, 10, 'Fighter');
fighter.displayStats();
fighter.getClass();

let roland = Object.create(fighter);

roland.equipment = (function() {
  let items = [];

  return {
    addItem(item) {
      items.push(item);
    },

    listItems() {
      items.forEach(item => console.log(item));
    },
  }
})();
// charClass.init(12, 16, 10, 9, 11, 8);
// charClass.displayStats();
// console.log(statBlock.isPrototypeOf(charClass));


roland.equipment.addItem('Sword');
roland.equipment.addItem('Shield');
roland.equipment.listItems();
//.init(12, 16, 10, 9, 11, 8);

//charClass.displayStats();
