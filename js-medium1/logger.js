/*
**Problem**
Read through the following code. Why will it log 'debugging'?


**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// const status has block scope (Lexical scoping) and is accessible within the nested function
// hoisting results in the function logger being 'hoisted to the top of the debutIt function followed by the const status variable which is left empty
// during execution the const status variable is then assigne the string value of 'debugging' then the logger() function is called