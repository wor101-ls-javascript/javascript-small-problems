// Write a password guessing program that tracks how many times the user enters the wrong password. 
// If the user enters the password wrong three times, log 'You have been denied access.' and terminate the program. 
// If the password is correct, log 'You have successfully logged in.' and end the program.

// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

const rlSync = require('readline-sync');

let loggedIn = false;
const PASSWORD = 'password';
let failedAttempts = 0;

while (failedAttempts < 3 && loggedIn == false) {
  userPassword = rlSync.question('What is the password: '); 
  if (userPassword === PASSWORD) {
    loggedIn = true;
  }
  failedAttempts += 1;
}

loggedIn ? console.log('You have successfully logged in.') : console.log('You have been denied access');
