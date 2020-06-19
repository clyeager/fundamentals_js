function multiplesOfThreeAndFive() {
  var i;
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} !`);
    } else if (i % 5 === 0 || i % 3 === 0) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive();

//Further exploration

function multiplesOfThreeAndFive(a, b) {
  var i;
  for (i = a; i <= b; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} !`);
    } else if (i % 5 === 0 || i % 3 === 0) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive(50, 100);