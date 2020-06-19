function substring(string, start, end) {
  var temp;
  var newString = '';

  if (start > string.length) {
    start = string.length;
  } else if (start < 0 || start !== Number(start)) {
    start = 0;
  }


  if (end > string.length || end === undefined) {
    end = string.length;
  } else if (end < 0 || end !== Number(end)) {
    end = 0;
  }

  if (start > end) {
    temp = end;
    end = start;
    start = temp;
  }
  
  if (start === end) { return ''; }

  while (start < end) {
    newString += string[start];
    start++;
  }

  return newString;
}