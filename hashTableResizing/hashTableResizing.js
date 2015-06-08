/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value){
    this.checkResize();
    var index = getIndexBelowMaxForKey(key, storageLimit);
    
    if( !storage[index] ) {
      storage[index] = [];
    }
    storage[index].push({key: value});
    size++;
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    var value;
    for(var i=0; i<bucket.length; i++) {
      if(bucket[i].key === key) {
        value = bucket[i].value;
      }
    }
    if( value ) {
      this.size--;    
      this.checkResize();
    }
    
    return value;
  };

  result.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    var value;
    for(var i=0; i<bucket.length; i++) {
      if(bucket[i].key === key) {
        value = bucket[i].value;
        delete bucket[i];
      }
    }
    if( value ) {
      this.size--;    
      this.checkResize();
    }
    
    return value;
  };

  result.checkResize = function() {
    if( size > storageLimit * 0.75 ) {
      storageLimit = storageLimit * 2;
    } else if ( size < storageLimit * 0.25 ) {
      storageLimit = storageLimit / 2;
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
