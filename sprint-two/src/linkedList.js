var LinkedList = function() {
  var list = {};
  // Edmund: list.head and list.tail will all point to the node in another func
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // To add the first node 
    if (list.head === null) { 
      list.head = Node(value);
      //both head and tail point to the same node 
      list.tail = list.head;
    // To add second node onwards 
    } else {
      // link the current tail node to a new node (node links to node) 
      list.tail.next = Node(value);
      // link the current list tail to the new node
      list.tail = list.tail.next; 
    }
  };

  list.removeHead = function() {
    var temp = list.head.value; 
    list.head = list.head.next; 
    return temp; 

  };

  list.contains = function(target) {
    // set first object to check === list.head
    var checkObj = list.head; 
    // loop until last object is reached or object.next === null
    while (checkObj.next !== null) {
      if (checkObj.value === target) {
        return true;
      }
      // change object to check into next object
      checkObj = checkObj.next; 
    }
    // Dont forget to check the last object 
    if (checkObj.value === target) {
      return true;
    }
    // not found 
    return false; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// linkedList = LinkedList(); 
// linkedList.addToTail(4);
// linkedList.addToTail(5);
// linkedList.addToTail(6);

// console.log(linkedList); // contains head with value of 4 and tail with value of 6 
// console.log(linkedList.head.next); // points to the object 5

/*
 * Complexity: What is the time complexity of the above functions?
 */ 
 // addToTail and removeHead are constant. contains is linear 
