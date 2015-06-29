

var nthFibonacci = function (n) {
  // TODO: implement me!
  if ( n === 0 || n === 1 ) {
    return n;
  }
  return nthFibonacci(n-1) + nthFibonacci(n-2);
};

var dynamicFib = function(n) {
  var hashedFibs = {0:0, 1:1};

  var innerFunction = function(n) {
    var first = hashedFibs[n-1] === 0  || hashedFibs[n-1] ? hashedFibs[n-1] : innerFunction(n-1); 
    var second = hashedFibs[n-2] === 0  || hashedFibs[n-2] ? hashedFibs[n-2] : innerFunction(n-2); 
    hashedFibs[n] = first + second;
    if ( n !==0 && !hashedFibs[n] ) {
      hashedFibs[n] = first + second;
    }
    return first + second;
  };
  return innerFunction(n);
};


var iterativeFib = function(n) {
  var fibNums = {0:0 , 1:1};
  var sum = 0;
  var counter = 0;

  while (counter < n) {
    if ( counter === 0 || counter === 1 ){
      sum += counter;
      counter++;
    } else {
      sum += (fibNums[n-1] + fibNums[n-2]);
      fibNums[counter] = sum;
      counter++;
    }
  }
  return sum;
};




// console.log(dynamicFib(2)); // => 1
// console.log(dynamicFib(3)); // => 2
// console.log(dynamicFib(4)); // => 3
// console.log(dynamicFib(99)); // => 3

console.log(iterativeFib(2)); // => 1
console.log(iterativeFib(3)); // => 2
