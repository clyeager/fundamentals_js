function toLowerCase(string) {
  var i;
  var asciiNumber;
  var newString = '';

  for (i = 0; i < string.length; i++) {
    asciiNumber = string[i].charCodeAt(0);
    asciiNumber += 32;

    if (asciiNumber < 97 || asciiNumber > 122) {
      newString += string[i];
    } else {
      newString += String.fromCharCode(asciiNumber);
    }
  }

  return newString;
}