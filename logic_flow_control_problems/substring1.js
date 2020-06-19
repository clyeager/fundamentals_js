function substr(string, start, length) {
  var count;
  var i;
  var substring = '';

  if (start < 0) { start += string.length; }
  if (length <= 0) { return substring; }

  i = start;
  for (count = 0; (count < length && (start + count) < string.length); count++, i++) {
    substring += string[i];
  }

  return substring;
}