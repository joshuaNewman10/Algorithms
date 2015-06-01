/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

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

