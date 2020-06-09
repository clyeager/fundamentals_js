/*The code will print 1, as the inner variable separate and in a different scope. Executing foo
 does not change anything.*/

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*This doesn't log anything to the screen, as it returns undefined as soon as line 3 is 
interpreted.*/

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

/*This returns 'Yipeee!!!!' but does not log anything.*/