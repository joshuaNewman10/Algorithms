/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
  //Base Case: Not an object or Array
     //return apple === orange

  console.log(Object.prototype.toString.call(apple));
  if( !Array.isArray(apple) && Object.prototype.toString.call(apple) !== "[object Object]" ) {
     if( apple !== orange) {
      return false;
     }
  }

  //Recursive Case:
     //iterate over properties
        //if appleProp not in  orangeProp return false
        //deepEquals(appleVal, orangeVal)
  
  for( var prop in apple ) { //quick check
    if (!orange.hasOwnProperty(prop)) {
      return false;
    }
  }

  for( var property in apple ) {
    if( !deepEquals(apple[property], orange[property])) {
      return false;
    }
  }
  return true;
};


var obj1 = {a: 1, b: {c: 3, d: 4}};
var obj2 = {a: 1, b: {c: 3, d: 4}};
console.log(deepEquals(obj1, obj2));
