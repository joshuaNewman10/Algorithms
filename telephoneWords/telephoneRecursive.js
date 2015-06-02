var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


function telephonePermutations(str) {
  var strArray = str.split('');
  strArray = strArray.map(function(elem){
    return phoneDigitsToLetters[elem].split('');
  });
  var permutations = [];

  var innerFunc = function(digitChoices, perm, choiceIndex) {
    //base case
    if (perm.length === strArray.length) {
      permutations.push(perm.slice());
      return;
    }
    for(var i=0; i<digitChoices[choiceIndex].length; i++) {
      perm.push(digitChoices[choiceIndex][i]);
      innerFunc(digitChoices, perm, choiceIndex+1);
      perm.pop();
    }
  
  };
  innerFunc(strArray, [], 0);
  return permutations;
}

console.log(telephonePermutations('123'));