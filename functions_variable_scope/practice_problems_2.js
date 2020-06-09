//1
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

//This code logs undefined since hoisting brings up 'var a;' but no assignment takes place.

//2
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

/*This logs hello from calling hello(); on line 24, and line 25 logs an error because var a is 
not in the global scope. Inside the function 'var a;' is hoisted to the top, creating a 
local scope.*/

//3
var a = 'hello';

for (var i = 0; i < 5; i += 1) {
  var a = i;
}

console.log(a);

/*This code logs 4, as all of the code is in the same scope, and var a ends up being 
4 in the for loop.*/

//4
var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo());
console.log(a);

/*This logs 4, 3. 4 is the return value of bar() called by foo() and the global variable is 
also changed during the foo() (and subsequently bar()) call.*/

//5
var a = 'global';

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested();
  }

  return nested();
}

console.log(checkScope());
console.log(a);

/*Line 18 has a return value of the return value of supernested() which is 'superNested'.
Line 19 returns  'global' because each of the function calls creates a new variable named 'a'
 which are all separate from the global variable on line 1.*/

//6
var a = 'outer';
var b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

/*This logs outer, outer, outer, inner because arguments that are now local variables 
do not affect the original argument.*/

//7
var total = 50;
var increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);

/*This log 50, 60, 15. Increment as an argument is not the same as the variable 
in the outer scope.*/

//8
var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};

//This code logs outer, and then produces an error because setScope is not a function.
