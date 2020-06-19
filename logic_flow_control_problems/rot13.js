function rot13(string) {
  var i;
  var newString = '';

  for(i = 0; i < string.length; i++) {
    if (string[i].match(/^[a-zA-Z]+$/)) {
      newString += findNewLetter(string[i]);
    } else {
      newString += string[i];
    }
  }

  return newString;
}

function findNewLetter(letter) {
  var newAsciiValue;
  var newLetter;

  if (letter.match(/^[a-z]+$/) && letter <= 'm') {
    newAsciiValue = letter.charCodeAt(0) + 13;
    newLetter = String.fromCharCode(newAsciiValue);
  } else if (letter.match(/^[A-Z]+$/) && letter <= 'M') {
    newAsciiValue = letter.charCodeAt(0) + 13;
    newLetter = String.fromCharCode(newAsciiValue);
  } else {
    newAsciiValue = letter.charCodeAt(0) - 13;
    newLetter = String.fromCharCode(newAsciiValue);
  }

  return newLetter;
}