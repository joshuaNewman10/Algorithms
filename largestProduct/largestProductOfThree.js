function largestProductOfThree(arr){
  if(arr.length<3) return null;
  var largest = Math.max(arr[0],arr[1]); var smallest = Math.min(arr[0],arr[1]);
  var smallestProductOfTwo = arr[0]*arr[1]; var largestProductOfTwo = arr[0]*arr[1];
  var largestProductOfThree = arr[0]*arr[1]*arr[2];
  for (var i = 2; i < arr.length; i ++){
    largestProductOfThree = Math.max(largestProductOfTwo*arr[i],
smallestProductOfTwo*arr[i],largestProductOfThree);
    smallestProductOfTwo = Math.min(smallest * arr[i], smallestProductOfTwo);
    largestProductOfTwo = Math.max(largest * arr[i], largestProductOfTwo);
    if (arr[i] > largest) largest = arr[i];
    if (arr[i] < smallest) smallest = arr[i];
  }
  return largestProductOfThree;
}

console.log(largestProductOfThree([1,6,5,-7,-8,2,4,3]));
