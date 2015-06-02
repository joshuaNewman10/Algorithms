/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/
var identity = function(x) {
  return x;
};

var bind = function(func, cx) {
  cx = cx || null;
  var firstArgs = Array.prototype.slice.call(arguments, 2);
  return function() {
    var newArgs = Array.prototype.slice.call(arguments);
    var allArgs= firstArgs.concat(newArgs);
    return func.apply(cx, allArgs);
  };
};

 var alice = {
   name: 'alice',
   shout: function(){
     console.log(this.name);
   }
 };
 var boundShout = bind(alice.shout, alice);
 boundShout(); // alerts 'alice'
 boundShout = bind(alice.shout, {name: 'bob'});
 boundShout(); // alerts 'bob'


 var func = function(a, b){ return a + b; };
 var boundFunc = bind(func, null, 'foo');
 var result = boundFunc('bar');
 console.log(result === 'foobar'); // true

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(cx) {
  var func = this;
  cx = cx || null;
  var firstArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var allArgs = firstArgs.concat(args);
    return func.apply(cx, allArgs);
  };
};

 // var alice = {
 //   name: 'alice',
 //    shout: function(){
 //      console.log(this.name);
 //    }
 //  };
 //  var boundShout = alice.shout.bind(alice);
 //  boundShout(); // alerts 'alice'
 //  boundShout = alice.shout.bind({name: 'bob'});
 //  boundShout(); // alerts 'bob'
 
 
 //  var func = function(a, b){ return a + b; };
 //  var boundFunc = func.bind(null, 'foo');
 //  var result = boundFunc('bar');
 // console.log( result === 'foobar'); // true


/****************************
PartialAny
****************************/
var partialAny = (function() {

  function partialAny(fn) {
    var orig = Array.prototype.slice.call(arguments,0);

    return function() {
      var partial = Array.prototype.slice.call(arguments,0);
      var args = [];

/* Iterate over the originally-specified arguments. If the argument 
 was the `partialAny._` placeholder, use the next just-passed-in
 argument, otherwise use the originally-specified argument. */
      for(var i=0; i<orig.length; ++i) {
        args[i] = orig[i] === partialAny._ ? partial.shift() : orig[i];
      }
      return fn.apply(this,args.concat(partial));
    };
  }
  partialAny._ = {}; //placeholder arg
  return partialAny;
}());

function hex(r, g, b) {
  return '#' + r + g + b;
}

hex('11', '22', '33'); // "#112233"

// A more visually-appealing placeholder.
var __ = partialAny._;

var redMax = partialAny(hex, 'ff', __, __);
redMax('11', '22');    // "#ff1122"

var greenMax = partialAny(hex, __, 'ff');
greenMax('33', '44');  // "#33ff44"

var blueMax = partialAny(hex, __, __, 'ff');
blueMax('55', '66');   // "#5566ff"

var magentaMax = partialAny(hex, 'ff', __, 'ff');
magentaMax('77');      // "#ff77ff"


function partialAny(func) {
  var fixedArgs = Array.prototype.slice.call(arguments,1);

  return function() {
    var newArgs = Array.prototype.slice.call(arguments);

    var orderedArgs = newArgs.map(function(arg){

      if(arg==='_') {
        var a = fixedArgs[0];
        fixedArgs = fixedArgs.slice(1);
        return a;
      }
      return arg;
    });

    return func.apply(null,orderedArgs);

  };
}