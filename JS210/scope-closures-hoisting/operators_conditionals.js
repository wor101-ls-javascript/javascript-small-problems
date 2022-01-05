// 1.
let apples = 3;
let bananas = 1;
let eitherOr = apples || bananas;
let areEqual = apples || bananas;

console.log(eitherOr);
console.log(areEqual);

if (apples === bananas) {
  console.log("Apples equals bananas");
} else {
  if (apples == bananas) {
    console.log("Apples and bananas are the same number but of different types");
  } else {
    console.log("Apples don't equal bananas");
  }
}

let lastName = 'Rossen';
let familyMessage = lastName === 'Rossen' ? "Your'e part of the family!" : "Your'e not family.";



console.log(familyMessage);