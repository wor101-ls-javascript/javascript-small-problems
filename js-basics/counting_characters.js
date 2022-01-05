const rlSync = require("readline-sync");

console.log('Please enter a phrase: ');
let phrase = rlSync.prompt();
let length = phrase.replaceAll(' ', '').length;
let trimmedPhrase = phrase.replaceAll(' ', '');
console.log(trimmedPhrase);
console.log(`Therea are ${length} characters in "${phrase}".`);