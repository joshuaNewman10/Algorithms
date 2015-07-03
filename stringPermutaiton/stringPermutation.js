//Two strings A and B
//Check if B is a permutation of A in O(n+m) time 

//count character approach
function stringPermutationChecker (stringA, stringB) {
  var stringArrayA = stringA.split('');
  var stringArrayB = stringB.split('');

  if ( stringArrayB.length !== stringArrayA.length ) {
    return false;
  }

  var aChars = {};
  var bChars = {};

  stringArrayA.forEach(function (char, i) {
    var bChar = stringArrayB[i];
    aChars[char] ? aChars[char] +=1 : aChars[char] = 1;
    bChars[char] ? bChars[char] +=1 : bChars[char] = 1;
  });

  for( var char in aChars ) {
    if ( !bChars.hasOwnProperty[char]  || aChars[char] != bChars[char] ){
      return false;
    }
  }
  return true;
}

//Recursive Approach
function recursivePermutation (stringA, stringB) {
  var charsLeft = stringA.split('');
  var bChars = stringB.split('');

  var recursiveSubRoutine = function (charsLeft) {
    //base case
    console.log(charsLeft, bChars);
    if ( charsLeft.length === 0 && bChars.length === 0 ) {
      return true;
    } else if ( charsLeft.length === 0 && bChars.length > 0 ) {
      return false;
    } else {
      var index = bChars.indexOf(charsLeft.pop());
      if ( index > -1 ) {
        bChars.splice(index, 1);
      }
      return recursiveSubRoutine(charsLeft);
    }

  };

  return recursiveSubRoutine(charsLeft);
}

console.log(recursivePermutation('god','dog'));