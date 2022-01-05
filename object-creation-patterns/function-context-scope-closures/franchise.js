// The method franchise.allMovies is supposed to return the following array:

    // [
    //   'How to Train Your Dragon 1',
    //   'How to Train Your Dragon 2',
    //   'How to Train Your Dragon 3'
    // ]
// issue is the use of the map function
// context does not propogate down nested functions, and so it has a global context

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());