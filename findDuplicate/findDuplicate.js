function findRepeatLinear(input){
  var n = input.length-1;
  var currentPosition = input.length;
  debugger;
  //Step 1: Get inside of a cycle, start at position n+1 and walk n steps to find a position guaranteed to be in a cycle
  for (var i = 0;i<input.length;i++){
    currentPosition = input[currentPosition-1];
  }
  //Step 2: Find the length of the cycle
  var oldPosition = currentPosition;
  var cycleLength = 0;
  do {
    oldPosition = input[oldPosition-1];
    cycleLength++;
  } while (oldPosition!=currentPosition);
 //Step 3: Use the stick method to find the first node. Move the end of the stick up the length of the cycle
  var stickEndPosition=input.length;
  var stickBeginPosition=input.length;
  for (var i = 0; i<cycleLength; i++){
    stickEndPosition=input[stickEndPosition-1];
  }
  //then move both forward until overlap
  while(stickEndPosition!=stickBeginPosition){
    stickEndPosition=input[stickEndPosition-1];
    stickBeginPosition=input[stickBeginPosition-1];
  }
  //they will overlap on the first item in the cycle, which will be a repeat
  return stickEndPosition
}

console.log(findRepeatLinear([1,4,2,3,2,5]));
