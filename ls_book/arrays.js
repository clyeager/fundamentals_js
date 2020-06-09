//1//
let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

//Length values are: 4, 5, 0, 3, 101 respectively.//

//2//
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

myArray.forEach (function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

//3//
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach (function(innerArray) {
  innerArray.forEach (function(num) {
    if (num % 2 === 0) {
    console.log(num);
    }
  });
});

//4//
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let strings = myArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

//5//
let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);

function removeNonInteger(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

//6//
function oddLengths(arr) {
  let filteredNumbersArray = arr.map((letters) => {
    return letters.length;
  }).filter((number) => {
    return number % 2 === 1;
  });

  return filteredNumbersArray;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

//7//
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let numbers = [3, 5, 7];

//8//
function oddLengths(arr) {
  return arr.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

//9//
numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);

//10//
arr[1][2];