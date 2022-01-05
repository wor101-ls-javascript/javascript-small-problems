// 1.
function average (a) {
  total = 0;
  return sum(a) / a.length;
}

console.log(average([2, 4, 8, 10, 12]));

// 2.
function sum (a) {
  total = 0;
  for (index = 0; index < a.length; index += 1) {
    total += a[index];
  }
  return total;
}

temperatures = [32, 45, 76, 85, 98];

console.log(average(temperatures));

console.log(sum([2, 4, 8, 10, 12]));