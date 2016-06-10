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

setBinarySearchTree.contains = function(input){
  var result = false; 

  var inner = function(node) {
    // if node value is the target, returns true 
    if (node.value === input) { 
      result = true;
    // if input is smaller than node.value and there is a child node to the left   
    } else if (input < node.value && node.left !== undefined) {
      // invoke the function with left node
      inner(node.left);
    // do the same thing for right
    } else if (input > node.value && node.right !== undefined) {
      inner(node.right);
    }
    // exit when no child node left 
  };
  inner(this);
  return result; 
};  

setBinarySearchTree.depthFirstLog = function(){};  

/*
 * Complexity: What is the time complexity of the above functions?
 */
