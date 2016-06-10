var BinarySearchTree = function(value) {
  var instanceBinarySearchTree = Object.create(setBinarySearchTree); 
  
  instanceBinarySearchTree.value = value;
  // children[0] = {value: smaller}
  // [{value: somethingSmaller}, {value: larger}]
  
  //  same as instanceBinarySearchTree.children = [undefined, undefined];
  instanceBinarySearchTree.left = {};
  instanceBinarySearchTree.right = {};

  return instanceBinarySearchTree; 

};

var setBinarySearchTree = {};

setBinarySearchTree.insert = function(input) {
  
  var inner = function(node) {
    // check if the input is smaller than the node value
    if (input < node.value) {
      // check if the left node already exists 
      if (node.left.value === undefined) {
        // if not exist, assign a value to the left node
        node.left.value = input; 
        // create the child note for the newly created node
        node.left.left = {};
        node.left.right = {};
      } else {
        inner(node.left);  
      }
    } else {
      if (node.right.value === undefined) {
        node.right.value = input; 
        node.right.left = {};
        node.right.right = {};
      } else {
        inner(node.right);
      }
    }
  };
  inner(this); 
};  

setBinarySearchTree.contains = function(){};  

setBinarySearchTree.depthFirstLog = function(){};  

/*
 * Complexity: What is the time complexity of the above functions?
 */
