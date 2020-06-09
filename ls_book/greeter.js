let getName = words => {
  let rlSync = require('readline-sync');
  return rlSync.question(words);
}

let firstName = getName('Enter your first name: ');
let lastName = getName('Enter your last name: ');

console.log(`Hello ${firstName} ${lastName}!`);