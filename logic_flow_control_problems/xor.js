function isXor(a, b) {
  if (a && !b) {
    return true;
  } else if (!a && b) {
    return true;
  } else {
    return false;
  }
}

isXor('', 4);
isXor(4, undefined);
isXor(false, null);
isXor(NaN, 0);