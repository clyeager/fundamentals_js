function startsWith(string, searchString) {
  var i;

  if (searchString.length > string) {
    return false;
  }

  for (i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}