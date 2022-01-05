// function makeCounterLogger(num1) {
//   return function(num2) {
//     let i;

//     if (num1 < num2) {
//       for (let i = num1; i <= num2; i += 1) {
//         console.log(i);
//       }
//     } else if (num1 > num2) {
//       for (let i = num1; i >= num2; i -= 1) {
//         console.log(i);
//       }
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// console.log('');
// countlog(2);


function makeList() {
  let todos = [];
  return function (todo) {
    if (todo === undefined) {
      if (todos.length === 0) {
        console.log('This list is empty.');
      } else {
        todos.forEach(item => console.log(item));
      }      
    } else if (todos.includes(todo)) {
      let index = todos.indexOf(todo);
      todos.splice(index, 1);
      console.log(todo + ' removed!');

    } else {
      todos.push(todo);
      console.log(todo + ' added!');
    }
  }
}
let list = makeList();
list();
console.log('');
list('make breakfast');
list('read book');
console.log('');
list();
console.log('');
list('make breakfast');
list();