function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Error! Non-integer')
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(4);
evenOrOdd(5);
evenOrOdd(-4);
evenOrOdd("Todd");