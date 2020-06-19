var rlSync = require('readline-sync');
var score1 = Number(rlSync.question('Enter score 1: '));
var score2 = Number(rlSync.question('Enter score 2: '));
var score3 = Number(rlSync.question('Enter score 3: '));

var average = (score1 + score2 + score3) / 3
var letterGrade;

if (average < 50) {
  letterGrade = 'F';
} else if (average < 70) {
  letterGrade = 'C';
} else if (average < 90) {
  letterGrade = 'B';
} else {
  letterGrade = 'A';
}

console.log(`Based on the average of your 3 scores your letter grade is \"${letterGrade}\".`)
