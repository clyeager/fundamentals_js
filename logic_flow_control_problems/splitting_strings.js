function splitEachCharacter(string) {
  var newString = '';
  var i;

  for (i = 0; i < string.length; i++) {
    if (i === (string.length - 1)) {
      newString += string[i];
    } else {
      newString += (string[i] + '\n');
    }
  }

  return newString;
}

function splitByDelimiter(string, delimiter) {
  var newString = '';
  var i;

  for (i = 0; i < string.length; i++) {
    if (string[i] !== delimiter) {
      newString += string[i];
    } else if ((string[i] === delimiter) && (i !== string.length - 1)) {
      newString += '\n';
    }
  }

  return newString;
}

function splitString(string, delimiter) {
  var newString;

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  } else if (delimiter === '') {
    newString = splitEachCharacter(string);
  } else {
    newString = splitByDelimiter(string, delimiter);
  }

  if (newString === '') {
    console.log(string);
  } else {
    console.log(newString);
  }
}