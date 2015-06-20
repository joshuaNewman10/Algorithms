//Make function to see if LL is a pallindrome
var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

LinkedList.prototype.addToTail = function(val) {
  var node = new ListNode(val);

  if ( this.head === null ) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.size +=1;
};

LinkedList.prototype.logList = function() {
  var currNode = this.head;
  console.log(currNode.val);
  while ( currNode.next !== null ) {
    currNode = currNode.next;
    console.log(currNode.val);
  } 
};

var ListNode = function(val) {
  this.val = val;
  this.next = null;
};

var evenList = new LinkedList();
evenList.addToTail('D');
evenList.addToTail('O');
evenList.addToTail('G');
evenList.addToTail('G');
evenList.addToTail('O');
evenList.addToTail('D');

// var OddList = new LinkedList();
// OddList.addToTail('D');
// OddList.addToTail('O');
// OddList.addToTail('G');
// OddList.addToTail('O');
// OddList.addToTail('D');


function listPallindromeTest(list) {
  var chars = [];
  var listSize = list.size;
  var currNode = list.head;
  var i = 0;
  while( i < listSize/2 ) {
    chars.push(currNode.val);
    currNode = currNode.next;
    i+=1;
  }

  for( var j=0; j<chars.length; j++) {
    console.log(chars[chars.length-1], currNode.val);
    if ( chars.pop() !== currNode.val ) {
      return false;
    }
    currNode = currNode.next;
  }
  return true;
}

console.log(listPallindromeTest(evenList))