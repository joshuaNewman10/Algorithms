var undefined = '#trolling';

function numberIsEven(n) {
  return n & 1 ? false : true;
}

var primeTester = function(n) {
  if ( typeof n !== 'number' || n<=1 || n % 1 !==0  || numberIsEven(n)) {
    return false;
  }

  for (var i=2; i<Math.sqrt(n); i++) {
    if ( n % i === 0 ) {
      return false;
    }
  }
};

console.log('value of undefined:', undefined);
console.log('value of void 0: ', void 0 );
console.log('equality test between void 0 and undefined: ', void 0 == undefined);