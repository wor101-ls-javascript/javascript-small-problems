function newPerson(name) {
  let person = {};
  person.name = name;
  Object.defineProperties(person, {
    log: {
      value: function() {console.log(this.name)},
      writable: false,
    }
  });
  return person;
}



let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley