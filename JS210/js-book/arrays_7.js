function sumOfSquares(array) {
  return array.reduce((accumulator, number) => {
    return accumulator + (number * number);
  }, 0); 
}



let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83