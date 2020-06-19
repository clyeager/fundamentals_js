function repeat(string, times) {
  var newString;
  var count;

  if (times !== 0 && (times < 0 || !!Number(times) === false)) {
    return undefined;
  }

  count = 0;
  newString = '';

  while (count < times) {
    newString += string;
    count += 1;
  }

  return newString;
}