let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age?\n'));

console.log(`In 10 years, you will be ${age + 10 } years old.`);
console.log(`In 20 years, you will be ${age + 20 } years old.`);
console.log(`In 30 years, you will be ${age + 30 } years old.`);
console.log(`In 40 years, you will be ${age + 40 } years old.`);

/*using for loop*/

let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age?\n'));

for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}