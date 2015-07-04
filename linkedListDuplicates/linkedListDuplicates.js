//Remove duplicates from unsorted LL

//Version 1: Linear Time O(n) space

//Version 2: Quadratic Time, O(1) Space


var seenNodes = {};

//O(n) scan with HT to check
function deleteDups (node) {
  //head node
  seenNodes[node.val] = true;
  while ( node && node.next !== null ) {
    var value = node.next.val;
    if ( seenNodes[value] ) {
      console.log('remove node', value);
      node.next = node.next.next || null;
    } else {
      seenNodes[value] = true;
    }
    node = node.next;
  }
}

//Slow and fast pointer
function deleteDupsQuadratic (node) {
  while ( node.next !== null ) {
    var value = node.val;
    checkList(node, value);
    node = node.next;
  }
}

function checkList (currentNode, targetValue) {
  while ( currentNode = currentNode.next ) {
    if ( currentNode.val === targetValue) {
      console.log('remove this node');
    }
  }
}

var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function (node) {
  if ( this.head === null ) {
    this.head = node;
  } else if ( this.tail === null ) {
    this.tail = node;
    this.head.next = node;
  } else {
    this.tail.next = node;
  }
};

var LinkedListNode = function (val) {
  this.val = val;
  this.next = null;
};

var myList = new LinkedList();
myList.addToTail(new LinkedListNode(5));
myList.addToTail(new LinkedListNode(10));
myList.addToTail(new LinkedListNode(20));
myList.addToTail(new LinkedListNode(10));

// console.log(myList);
// deleteDups(myList.head);
// console.log(seenNodes);
// console.log(myList);
//
deleteDupsQuadratic(myList.head);
