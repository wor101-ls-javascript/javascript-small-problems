let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

//$3.99 because sale returns true which the ! operator turns to false