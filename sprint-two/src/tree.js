var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value)); 
};

treeMethods.contains = function(target) {
  
  var result = false; 
  // inner(node, target){
  var inner = function(node, target) {
    // for, loop over children.length
    for (var i = 0; i < node.children.length; i++) {
      // if check if current child contains test 
      if (node.children[i].value === target) {
        result = true; 
      }
        // for loop over children.length 
      if (node.children[i].children.length) {
        inner(node.children[i], target );
      }
    }     
  }; 
  inner(this, target);
  return result; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */ // contains = linear / O(n)
    // add = constant / O(1)