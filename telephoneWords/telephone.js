

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


var telephoneWords = function(digitString) {
  var strArr =  digitString.split('');
  var results = [];
  var firstChars = phoneDigitsToLetters[strArr[0]] || '0';
  var secondChars = phoneDigitsToLetters[strArr[1]] || '0';
  var thirdChars = phoneDigitsToLetters[strArr[2]] || '0';
  var fourthChars = phoneDigitsToLetters[strArr[3]] || '0';

  var first;
  var second;
  var third;
  var fourth;

  //EEEK! We have thrown elogence out the window a long time ago
  for(var i=0; i<firstChars.length; i++) {
    first = firstChars[i];
    for(var j=0; j< secondChars.length; j++) {
      second = secondChars[j];
      for(var k=0; k<thirdChars.length; k++) {
        third = thirdChars[k];
        for(var l=0; l<fourthChars.length; l++) {
          fourth = fourthChars[l];
          results.push('' + first + second + third + fourth);
        }
      }
    }
  }
  return results;
};

