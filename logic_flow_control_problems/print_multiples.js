function logMultiples(n) {
  var i;
  for (i = 100; i >= n; i -= 1) {
    if (i % n === 0 && i % 2 === 1) {
      console.log(String(i));
    }
  }
}

logMultiples(21);

//Further exploration

function logMultiples(n) {
  var largestMultiple = Math.floor(100 / n) * n

  var i;
  for (i = largestMultiple; i >= n; i -= n) {
    if (i % 2 === 1) {
      console.log(String(i));
    }
  }
}

logMultiples(21);