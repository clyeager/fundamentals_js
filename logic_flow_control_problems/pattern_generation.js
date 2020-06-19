function generatePattern(n) {
  var num;
  var stars;
  var row = '';

  for(num = 1; num <= n; num++) {
    stars = '';
    row += num;
    for(count = 1; count <= (n - num); count++) {
      stars += '*';
    }
    console.log(row + stars);
  }
}

generatePattern(9);

//Further exploration

function generatePattern(n) {
  var num;
  var stars;
  var row = '';
  var maxStarCount = 0;
  var starCount = 0;

  for(num = 1; num <= n; num++) {
    maxStarCount += String(num).length;
  }

  for(num = 1; num <= n; num++) {
    stars = '';
    row += num;
    starCount = maxStarCount - String(row.length);
    for(; starCount >= 1; starCount--) {
      stars += '*';
    }
    console.log(row + stars);
  }
}

generatePattern(30);
