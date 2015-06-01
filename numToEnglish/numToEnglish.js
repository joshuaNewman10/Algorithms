var numToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numToPlace = {
  1: 'ten',
  2: 'hundred',
  3: 'thousand',
  4: 'million',
  5: 'billion',
  6: 'trillion',
  7: 'quadrillion',
  8: 'quintillion',
};

Number.prototype.toEnglish = function() {
  var n = this.valueOf(), 
 output;
  if (numToWords[n]) {
    // numbers less than 20 or divisible by 10   
    output = numToWords[n];
  } else if (n < 100) {
    // tens and a single digit, hyphenated
    numInPlace = Math.floor(n / 10);
    numLeft = n % 10;
    output = numToWords[numInPlace * 10] +'-'+ (numLeft).toEnglish();
  } else {
    // combo of number and a place name
    if (n < 1000) {
      // the hundreds place is special
      place = 100;
    } else {
      // or multiple of 1000
      place = 1000;
      while (place * 1000 <= n) {
            place *= 1000;
      }
    }
    numInPlace = Math.floor(n / place);
    numLeft = n % place;
    // assemble this 1000s place
    output = numInPlace.toEnglish() +' '+ 
    numToPlace[place];
    // assemble the rest of the number
    restOfString = (numLeft).toEnglish();
    if (restOfString !== 'zero') {
      output += ' ' + restOfString;
    }
  }
  return output;
};

console.log((532091).toEnglish());
