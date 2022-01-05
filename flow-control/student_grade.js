// Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'
// You may assume that all input values are valid positive integers.

const rlSync = require('readline-sync');

let scores = [];

function requestScores() {
  console.log('Enter "n" when all scores have been entered.')
  
  let scoreCount = 1;

  do {
    userInput = rlSync.question(`Enter score ${scoreCount}: `);
    if (userInput === 'n') {
      break;
    } else {
      scores.push(parseInt(userInput));
      scoreCount += 1;
    }
  } while (userInput !== 'n');
}

function calcAverage(scores) {
  let total = 0;
  
  scores.forEach(element => {
    total += element;
  });

  return total / scores.length;
}


function reportScores(average) {
  let gradeReport = 'Based on the average of your 3 scores your letter grade is ';
  if (average < 50) {
    gradeReport += '"F".';
  } else if (average < 70) {
    gradeReport += '"C".';
  } else if (average < 90) {
    gradeReport += '"B".';
  } else {
    gradeReport += '"A".';
  }
  console.log(gradeReport);
}

requestScores();
average = calcAverage(scores);
console.log("the avg is: " + average);
reportScores(average);


