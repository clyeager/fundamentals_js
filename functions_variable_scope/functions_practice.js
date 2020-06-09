//1
function average(a, b, c) {
  return (a + b + c) / 3;
}

result = average(3, 4, 7);
console.log(result);

//2
function sum(a, b, c) {
  return a + b + c;
}

function average(a, b, c) {
  return sum(a, b, c) / 3;
}

result = average(3, 4, 7);
console.log(result);

//3
function average(arr) {
  var total = 0;

  for (var i = 0, length = arr.length; i < length; i +=1) {
    total += arr[i];
  }

  return total / length;
}

console.log(average([3, 3, 8, 3, 3]));

//4
function sum (arr) {
  var total = 0;

  for (var i = 0, length = arr.length; i < length; i +=1) {
    total += arr[i];
  }

  return total;
}

function average(arr) {
  return sum(arr) / arr.length;
}

console.log(average([3, 3, 8, 3, 3]));

//5
var temperatures = [95, 87, 79, 85, 81];
console.log(average(temperatures));
