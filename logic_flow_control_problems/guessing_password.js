var password = 'password';
var count = 0;
var rlSync = require('readline-sync');

while (count < 3) {
  guess = rlSync.question('What is the password: ');

  if (guess === password) {
    console.log('You have successfully logged in.');
    return;
  }

  count ++;
}

console.log('You have been denied access.');