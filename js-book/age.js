let rlSync = require('readline-sync');

let userAge = Number(rlSync.question('How old are you?'));



console.log(`You are ${userAge} years old.`);

for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years, you will be ${years + userAge} years old.`);
}

// console.log(`In 10 years, you will be ${10 + userAge} years old.`);
// console.log(`In 20 years, you will be ${20 + userAge} years old.`);
// console.log(`In 30 years, you will be ${30 + userAge} years old.`);
// console.log(`In 40 years, you will be ${40 + userAge} years old.`);