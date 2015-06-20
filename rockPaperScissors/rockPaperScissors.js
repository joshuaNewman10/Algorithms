/*
How many possible combos of RPS are there?
*/
var options = ['rock', 'paper', 'scissors'];
var combinations = [];

var rps = function (param) {
  var combo = [];
  var play;
  var res = false;
  for(var i=0; i<param; i++) {
    combo.push(options[Math.floor(Math.random() * options.length)]);
  } 
  for(var j=0; j<combinations.length; j++) {
    res = equalTo(combo, combinations[j]);
    if(res) return;
  }
  combinations.push(combo);
};

function equalTo(arr1,arr2) {
  var res = true;
  for(var i=0; i<arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      res = false;
    }
  }
  return res;
}


var rockPaperScissors = function(param) {
  for(var k=0; k<2000; k++) {
    rps(param);
  }
  return combinations;
};

