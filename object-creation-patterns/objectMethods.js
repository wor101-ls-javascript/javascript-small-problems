let me = {
  firstName: 'Will',
};

let catman = {
  firstName: 'Rocky',
  lastName: 'Da Cat',
};

let dog = {
  firstName: 'Rosie',
  lastName: 'The Dog',
};

let fatcat = {
  firstName: 'Boston',
  lastName: 'Da Lazy Cat',
};

me.lastName = 'Rossen';

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

function rollCall(collection) {
  collection.forEach(fullName);
}



let people = {
  collection: [],
  lastIndexUsed: -1,
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(people.fullName);
  },
};

//people.rollCall();


people.add = function(person) {
  if (this.isInValidPerson(person)) {
    return;
  }
  this.lastIndexUsed += 1;
  person.id = this.lastIndexUsed;
  this.collection.push(person);
};

people.getIndex = function(person) {
  let index = -1;
  this.collection.forEach(function(comparator, i) {
    if (comparator.firstName === person.firstName &&
        comparator.lastName === person.lastName) {
      index = i;
    }    
  });
  return index;
};

people.remove = function(person) {
  let index;
  if (!this.isInValidPerson(person)) {
    return;
  }
  
  index = this.getIndex(person);
  if (index === -1) {
    return;
  }
  this.collection.splice(index, 1);
};

people.isInValidPerson = function(person) {
  return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';  
};

people.get = function(person) {
  if (this.isInValidPerson(person)) {
    return;
  }

  return this.collection[this.getIndex(person)];
};

people.update = function(person) {
  if (this.isInValidPerson(person)) {
    return;
  }

  let existingPersonId = this.getIndex(person);
  if (existingPersonId === -1) {
    this.add(person);
  } else {
    this.collection[existingPersonId] = person;
  }
};



people.add(fatcat);
people.add(me);
people.add(catman);
people.add(dog);
people.rollCall();
console.log(people.get(catman));