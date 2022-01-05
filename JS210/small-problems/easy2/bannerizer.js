/*
**Problem**
Write a function that will take a short line of text, and write it to the console log within a box.

You may assume that the output will always fit in your browser window.



**Examples / Test Cases**
logInBox('To boldly go where no one has gone before.');

will log:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

**Data Structures**
input string
output strings
- first and fourth line starts/ends with a '+' and has '-' equal to length of input string + 2
- second and fourth lines start/end with '|' and have ' ' equal to length of input string + 2
- third line starts with '| ' followed by input string and ends with ' |'

**Algorithm**
1. determine length of input string
2. create firstAndFith line
  - set equal to '+' + '-'.repeat(length + 2) + '+'
3. create secondAndFourth line
  - set equal to '|' + ' '.repeate(length + 2)
4. create third line
  - set equal to '| ' + inputString + ' |'
5. log to console:
  - firstAndFith
  - secondAndFourth
  - third
  - secondAndFourth
  - firstAndFith
*/

function logInBox(string) {
  let length = string.length;
  let firstAndFith = '+' + '-'.repeat(length + 2) + '+';
  let secondAndFourth = '|' + ' '.repeat(length + 2) + '|';
  let third = '| ' + string + ' |';

  console.log(firstAndFith);
  console.log(secondAndFourth);
  console.log(third);
  console.log(secondAndFourth);
  console.log(firstAndFith);
}

logInBox('To boldly go where no one has gone before.');
console.log('');
logInBox('');