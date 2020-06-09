//1//
person.name;
person['name'];

//2//
//All are valid, as JS coerces non-string keys into strings.//

//3//
let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

//4//
let objKeys = Object.keys(obj).map((key) => key.toUpperCase());
console.log(objKeys);
console.log(obj);

//5//
let myObj = Object.create(myProtoObj);

//6//
myObj.qux = 3;

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

/*The first code snippet iterates over myObj keys only, while the second snippet iterates
 over myObj keys and also keys of its prototype.*/