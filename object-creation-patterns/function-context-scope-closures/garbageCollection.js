// Read the following code carefully. 
// Will the JavaScript garbage collection mechanism garbage collect the value assigned to the variable count 
// after the function counter is run on line 10?


function makeCounter() {
  let count = 1;

  return () => {
    console.log(count++)    // this includes the variable count in its closure
  };
}

const counter = makeCounter();
counter();
// more code

