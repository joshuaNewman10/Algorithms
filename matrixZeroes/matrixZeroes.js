//Prompt: Input a mxn matrix with numerical eleemnts
//Output: Output a mxn matrix where any row or a column with a zero element becomes all zroes

function replaceWithZeroes(arr) {
  return arr.map(function(elem) {
    return 0;
  });
}

function matrixTransformer(matrix) {
  //iterate through the matrix going over rows
     //if find a zero
        //add that row index to our rows storage
        //add that column index to our columns storage

  //transform row/column with zeroes

  var cols = [];
  var rows = [];

  for(var i=0; i<matrix.length; i++) {
    if( rows.indexOf(i) > -1 ) {
      continue;
    }
    for(var j=0; j<matrix[0].length; j++) {
      if( cols.indexOf(j) > -1) {
        continue;
      } else if ( matrix[i][j] === 0 ) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  for(var k=0; k<rows.length; k++) {
    matrix[k] = Array.apply(null, Array(matrix[0].length)).map(function(x) {
      return 0;
    });
  }
  for(var l=0; l<matrix.length; l++) {
    for(var b=0; b<cols.length; b++) {
      matrix[l][cols[b]] = 0;
    }
  }
  return matrix;
}


var matrix = [
[0]
];

console.log(matrixTransformer(matrix));