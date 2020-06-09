false || (true && false); //false//
true || (1 + 2); //true//
(1 + 2) || true; //3//
true && (1 + 2); //3//
false && (1 + 2); //false//
(1 + 2) && true; //true//
(32 * 4) >= 129; //false//
false !== !true; //false//
true === 4; //false//
false === (847 === '847'); //true//
false === (847 == '847'); //false//
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //true//

function evenOrOdd (n) {
  if (n !== Number(n)) {
    console.log('must enter a number');
    return;
  }

  if (n % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*Logs 'Product2'
       'Product3'
       'Product not found!'
Since there is no break keyword*/

if (foo()) {
  return 'bar';
} else {
  return qux();
}

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

/*This logs 'Not Empty' because it is not falsy.*/

function capLongWords(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}
