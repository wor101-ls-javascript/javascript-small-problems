// all cars start out not moving, and sedans can accelerate about 8 mph per second

// let sedan = {
//   speed: 0,
//   rate: 8,
//   accelerate() {
//     this.speed += this.rate;
//   },

// };

// console.log(sedan);
// sedan.accelerate();
// console.log(sedan);

function makeCar(rate, slow) {
  return { speed: 0, 
           rate,
           slow,
           accelerate() {
            this.speed += this.rate;
           }, 
           brake() {
            this.speed -= this.slow;
            if (this.speed < 0) this.speed = 0;
           }
          };
}

let hatchback = makeCar(9, 8);
let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
console.log('');
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);