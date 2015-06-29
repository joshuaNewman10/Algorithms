

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

// //1) Expected I/O
//    Input: Roman num strng
//    Output: JS number

// 2) Explore problem
//   Subtraction issue
//   null if invalid
//   big number
//   single numeral
//   negative?

// 3) High Level Approach
//    Split into characters
//    Store result of each in array
   
var sum = function(arr) {
  var total = 0;
  var curr;
  var next;
  for(var i=0; i<arr.length; i++) {
    curr = arr[i];
   if(curr === undefined) {
      return null;
    }
    next = arr[i+1];
    if( curr < next ) {
      total += (next-curr);
      i++;
    } else {
      total+=curr;
    }
  } 
  return total;
};

var translateRomanNumeral = function(romanNumeral){
// TODO: Implement me!
  var values = [];
  var numerals = romanNumeral.split('');
  numerals.forEach(function(numeral) {
    values.push(DIGIT_VALUES[numeral]);
  });
  return sum(values);
};

