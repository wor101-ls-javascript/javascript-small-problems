// 2. Edit the code from problem one so it executes without error.

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// })();

// 3. The code below throws an error:
// What kind of problem does this error highlight? 
// Use an IIFE to address it, so that code runs without error.

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }
// (function(arr) {
//   return arr.reduce((sum, number) => sum += number), 0);
// })(numbers);

//sum += sum(numbers);  // ?
// sum += (function(arr) {
//   return arr.reduce((sum, number) => sum += number, 0);
// })(numbers);
// console.log(sum);

// 4. Consider the output below:
// Implement a function countdown that uses an IIFE to generate the desired output.
// countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!

function countdown(count) {
  (function logCount(n){
    if (n >= 0) {
      console.log(n);
      n -= 1;
      logCount(n);
    } else {
      console.log('Done!');
    }
  })(count);
}

countdown(7);

