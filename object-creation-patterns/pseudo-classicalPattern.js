let Point = function(x = 0, y = 0) {            // capitalized constructor name as a convention
  this.x = x;                                   // initialize states with arguments
  this.y = y;                                   // 0 as default value
};

Point.prototype.onXAxis = function() {  // shared behaviors added to constructor's prototype property
  return this.y === 0;
};

Point.prototype.onYAxis = function() {  // these methods are added one by one
  return this.x === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

let pointA = new Point(30, 40);         // use new to create objects
let pointB = new Point(20);

console.log(pointA instanceof Point);                // use instanceof to check type
console.log(pointB instanceof Point);

console.log(pointA.distanceToOrigin());              // 50
console.log(pointB.onXAxis());                       // true