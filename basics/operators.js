//1
var apples = 3;
var bananas = 5;

if (apples == bananas) {
  console.log('true');
}

//2
bananas = '3';

if (apples == bananas) {
  console.log('true');
}

//3
if (apples === bananas) {
  console.log('true');
}

/*This doesn't output a message because it checks for both value and data type 
without any conversion.*/

//4
if (apples === bananas) {
  console.log('true');
} else {
  console.log('false');
}

//5
if (apples === bananas) {
  console.log('the same!');
} else if (apples == bananas) {
  console.log('same number, different types');
} else {
  console.log('different!');
}

//6
else {
  if (apples == bananas) {
    console.log('same number, different types');
  } 
  else {
    console.log('different!');
  }
}

//7
apples = 3;
bananas = 3;
var areEqual = apples === bananas;

console.log(areEqual);

//8
apples = 3;
bananas = undefined;

eitherOr = apples || bananas;
console.log(eitherOr);

//9
bananas = 1;
eitherOr = apples || bananas;

console.log(eitherOr);

eitherOr = bananas || apples;

console.log(eitherOr);

//10
var lastName = 'Yeager';
var familyMessage = lastName === 'Yeager' ? 'You\'re part of the family!' : 'You\'re not family.';

