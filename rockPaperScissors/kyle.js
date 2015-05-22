// for n rounds of rock paper scissors, what are 
// all of the possible sequences of throws a single
// player could throw.
function rockPaperScissors(n){
  return permutations(n, ['rock', 'paper', 'scissors']);
}
































// for a group of competitors competiting in 
// n different olympic swimming events, return
// all of the possible winning results.
function olympicSwimmingWinners(n, competitors){
  return permutations(n, competitors);
}

olympicSwimmingWinners(10, [
                          'Michael Phelps',
                          'Mark Spitz',
                          'Matt Biondi',
                          'Ryan Lochte',
                          'Gary Hall Jr.',
                          'Ian Thorpe',
                          'Aaron Peirsol',
                          ]);






















// given a number of days and a list of the shirts
// kyle owns, returns all the possible
// sequences of shirt wearing kyle 
// could undertake (given that he has the choice to
// wear the same shirt every day without washing it)

function kyleWardrobe(n, shirts){
  return permutations(n, shirts);
}

kyleWardrobe(10, ['tshirt', 'stinkyPolo', 'otherTshirt', 'hoodyA', 'hoodyB']);




























function permutations(rounds, choices){
  var results = [];
  
  function innerFunc(round, plays){
    if (round === rounds){
      results.push(plays.slice());
      return;
    }else{
      for (var i = 0; i < choices.length; i++){
        plays.push(choices[i])
        innerFunc(round + 1, plays);
        plays.pop();
      }
    }
  }

  innerFunc(0, []);
  return results;
}