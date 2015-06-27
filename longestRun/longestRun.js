

var longestRun = function (string) {
  var strArray = string.split('');
  var currentChar = strArray[0];
  var currentRunLength = 1;
  var longestRunLength = 1;
  var indexHolder = [0, 0];
  var start = 0;

  for(var i=1; i<strArray.length; i++) {
    if ( strArray[i] === currentChar ) {
      currentRunLength +=1;
    } else {
      if ( currentRunLength > longestRunLength ) {
        longestRunLength = currentRunLength;
        currentRunLength = 0;
        indexHolder[1] = i-1;
        indexHolder[0] = start;
      } else {
        currentRunLength = 1;
        currentChar = strArray[i];
        start = i;
      }
    }
  }
  return indexHolder;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};


    console.log(longestRun("abbbcc")); // [1, 3]
    console.log(longestRun("aabbc"));  // [0, 1]
    console.log(longestRun("abcd"));  // [0, 0]
