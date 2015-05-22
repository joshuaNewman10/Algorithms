var sieveOfErosthosthenes = function(start, end) {
  var primes = range(0, end);
  var current = 2;

  while( current < end ) {
    for ( var j = current *2; j<=end; j+=current) {
      primes[current] = null;
    }
    current+=1;
    while( !primes[current] && current <=end ) {
      current++;
    }
  }
};