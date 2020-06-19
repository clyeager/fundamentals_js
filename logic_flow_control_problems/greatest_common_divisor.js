function gcd(a, b) {
  var lowestNumber = Math.min(a, b);
  var highestNumber = Math.max(a, b);

  var divisor;
  for (divisor = lowestNumber; divisor >= 1; divisor--) {
    if (highestNumber % divisor === 0 && lowestNumber % divisor === 0) {
      return divisor;
    }
  }

  return 1;
}