function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

function factorial(n) {
  let result = 1;
  for (let num = n; num <= 1; num-= 1) {
    result = result * num
  }

  return result;
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*This causes an infinite loop because counter = 1 is an assignment that takes place each 
iteration, and therefore counter will never be greater than 2.*/

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/*This code logs 1, 2, 3, 4, 5*/

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater 2');


function factorial(number) {
  if (number <= 1) {
    return 1;
  }

  return number * factorial(number - 1);
}