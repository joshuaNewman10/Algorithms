function repeatedArithShift(x, count) {
  for (var i=0; i<count; i++) {
    x  >>= 1;
  }
  return x;
}


function repeatedLogicalShift(x, count) {
  for(var i=0; i<count; i++) {
    x >>>= 1;
  }
  return x;
}


function getBit(num, i) {
  return num & (1 << i) !== 0;
}

function setBit(num, i) {
  return num | (1 << i);
}

function clearBit(num, i) {
  return num & ~(1 << i);
}

function clearBitsFromMToI(num, i) {
  return num & (1 << i) - 1;
}

function clearBitsFromIToEnd(num, i) {
  var mask = ~(1 >>> (31 - i));
  return num & mask;
}

function updateBit(num, i, bitIs1) {
  var value = bitis1 ? 1 : 0;
  var mask = ~(1 << i);
  return (num & mask) | (value << i);
}


function updateBits(m, n, i, j) {
  /*Create mask to clear bits from j  through i */
  var allOnes = ~0;

  var left = allOnes << j;

  var right = ((1 << i) - 1);
}

updateBits(10, 10, 10, 10);

