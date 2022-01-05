let rlSync = require('readline-sync');

function getFirstName() {
  return rlSync.question('What is your first name?');
}

function getLastName() {
  return rlSync.question('What is your last name?');
}

// let userFirstName = rlSync.question('What is your first name?');
// let userLastName = rlSync.question('What is your last name?');
console.log(`Hello, ${getFirstName()} ${getLastName()}!`);
