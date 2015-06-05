var dispatcher = {};

var testRequest = (function() {
  var key=0;

  return function(url, callback) {
    var i = ++key;

    dispatcher[i] = function() {
      console.log('THIS', this, arguments);
      callback.apply(this, arguments);
      delete dispatcher[i];
    };
  };
})();


testRequest('aaa', function() {
  console.log('wahoooo!');
});

console.log('dispatcher', dispatcher);

dispatcher[1]();
console.log(dispatcher)