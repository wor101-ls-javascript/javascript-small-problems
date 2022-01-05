function makeList() {
  let todos = [];
  return { 
           add(todo) {
             todos.push(todo);
             console.log(todo + ' added!');
           }, 
           remove(todo) {
             let index = todos.indexOf(todo);
             if (index >= 0) {
               todos.splice(index, 1);
               console.log(todo + ' removed!');
             } else {
               console.log(todo + ' was not in the list');
             }
           },
           list() {
            if (todos.length === 0) {
              console.log('No items on the list');
            } else {
              todos.forEach(item => console.log(item));
            }
           },
  }
}

let list = makeList();
list.add('peas');
list.list();
console.log('');
list.add('corn');
list.list();
console.log('');
list.remove('peas');
list.list();