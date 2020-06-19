function trim(string) {
  var firstIndex;
  var lastIndex;
  var i = 0;
  var j = (string.length - 1);

  while (i <= j) {
    if (string[i] === ' ') {
      i++;
    } else {
      firstIndex = i;
      break;
    }
  }

  while (j >= 0) {
    if (string[j] === ' ') {
      j--;
    } else {
      lastIndex = j;
      break;
    }
  }

  if (firstIndex !== undefined && lastIndex !== undefined) {
    return string.substring(firstIndex, (lastIndex + 1));
  } else {
    return '';
  }
}

trim('  abc  ');
trim('abc   ');
trim(' ab c');
trim(' a b  c');
trim('      ');
trim('');