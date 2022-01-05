function increment(thing) {
  thing.count += 1;
  console.log(thing.count);
}

var counter = { count: 0 };
console.log(counter);
// { count: 0 }
increment(counter);
// 1
console.log(counter);
// { count: 1 }