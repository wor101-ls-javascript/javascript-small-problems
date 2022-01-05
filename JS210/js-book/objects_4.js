let obj = {
  b: 2,
  a: 1,
  c: 3,
};

myArray = Object.keys(obj).map(key => key.toUpperCase());

console.log(myArray);
console.log(obj)
