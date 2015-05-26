var insertionSort = function(array) {
  for (var ix = 1; ix < array.length; ix++) {
    // Assume that array.slice(0, ix) is sorted.

    // Grab the current element
    var val = array[ix];
    var insertIx = ix;

    // Find the insertion point
    while (insertIx && val < array[--insertIx]) {
      void 0;
    }

    // Insert the element
    array.splice(ix, 1);
    array.splice(insertIx+1, 0, val);

  }

  return array;
};
// var insertionSort = function(array) {
//   for (var ix = 1; ix < array.length; ix++) {
//     // Assume that array.slice(0, ix) is sorted.

//     // Grab the current element
//     var val = array[ix];
//     var hole = ix;

//     // Find the insertion point
//     while (hole && val < array[hole - 1]) {
//       array[hole] = array[hole - 1];
//       hole -= 1;
//     }

//     // Insert the element
//     array[hole] = val;
//     /* At this point, `val` has been inserted,
//      * and array.slice(0, ix + 1) is now sorted.*/
//   }

//   return array;
// };


console.log(insertionSort([1,3,2, 18, 5]));