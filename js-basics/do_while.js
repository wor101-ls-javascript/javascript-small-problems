let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}             
// the first snippet will never run

counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
// this snippet will run at least once.