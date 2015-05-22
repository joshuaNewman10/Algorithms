function numberIsEven(n) {
  return n & 1 ? false : true;
}

var primeTester = function(n) {
  if ( typeof n !== 'number' || n<=1 || n % 1 !==0  || numerIsEven(n)) {
    return false;
  }

  for (var i=2; i<Math.sqrt(n); i++) {
    if ( n % i === 0 ) {
      return false;
    }
  }
};