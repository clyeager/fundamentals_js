//1
var a = 'outer';

function testScope() {
  var a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

/*This code logs outer, inner, outer respectively. There are two different variables named 'a'
 and therefore one is in the scope of the function as a local variable  and one is in the
 global scope.*/

//2
var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

//This code logs outer, inner, inner because the function reassigns var a.

//3
var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket);
  }

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

/*This code logs empty, play station, computer. Empty is logged on line 8 because it's using 
the global variable, as we only declared shop1 and didn't actually call it yet. On line 
16, play station is logged because basket is currently a local variable separate from the 
outer scope, which also means it shadows the outer global variable. On line 23, computer is 
logged because that is the last reassignment that took place in relation to this scope.*/

//4
function hello() {
  a = 'hello';
}

hello();
console.log(a);

//This code logs hello because a automatically becomes a global variable.

//5
oblem 5
function hello() {
  var a = 'hello';
}

hello();
console.log(a);

//This code produces as error when trying to log a because var a created a local function scope.

//6
console.log(a);

var a = 1;

//This code logs undefined, due to variable hoisting bringing 'var a;' to the top.

//7
console.log(a);

function hello() {
  a = 1;
}

//This code produces an error because we never call the function, so a is undeclared and unassigned.


