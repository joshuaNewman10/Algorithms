var makeChange = function(total, coins){
  var counter = 0;
  (function recurse (index, remainder) {
    debugger;
    var coin = coins[index];
    if (index === 0) {
      remainder % coin === 0 && counter++;
      return;
    }
    while (remainder >= 0) {
      recurse(index-1, remainder);
      remainder -= coin;
    }
  })(coins.length-1, total);

  return counter;
};

console.log(makeChange(5, [1,2,5]));
