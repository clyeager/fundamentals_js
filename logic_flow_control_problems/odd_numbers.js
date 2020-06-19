function logOddNumbers(n) {
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      continue
    } else {
      console.log(i);
    }
  }
}

logOddNumbers(19);

//Further exploration

function logOddNumbers(n) {
  var i = 1;
  for (i = 1; i <= n;) {
    console.log(i);
    i += 2;
  }
}

logOddNumbers(19);