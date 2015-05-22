var rockPaperScissors = function (rounds) {
  rounds = rounds || 3;
  var outcomes = [];
  var plays = ['rock', 'paper', 'scissors'];

  var findOutcome = function(roundsLeft, playedSoFar){
  if (roundsLeft === 0) {
    return outcomes.push(playedSoFar);
  }
 
for( var i = 0; i < plays.length; i++ ){
  var currentPlay = plays[i];
  debugger;
  findOutcome(roundsLeft-1, playedSoFar.concat(currentPlay));
}

};
  findOutcome(rounds, []);
  return outcomes;
};



var rockPaperScissors = function (rounds) {
rounds = rounds || 3;
var outcomes = [];
var playedSoFar = [];
var plays = ['rock', 'paper', 'scissors'];
var combos = function(roundsToGo) {
if( roundsToGo === 0 ){
return outcomes.push( playedSoFar );
}
for( var i = 0; i < plays.length; i++ ){
var currentPlay = plays[i];
playedSoFar.push(currentPlay);
combos( roundsToGo-1);
playedSoFar.pop();
}
};
combos( rounds );
return outcomes;
};

console.log(rockPaperScissors(3));
