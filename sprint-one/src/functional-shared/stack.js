var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0; 

  _.extend(someInstance, stackMethods);

  return someInstance; 
};

var stackMethods = {};

stackMethods.size = function() {
  return this.key; 
};

stackMethods.push = function(input) {
  this.storage[this.key] = input; 
  this.key++; 
};

stackMethods.pop = function() {
  this.key--;
  if (this.key < 0) { this.key = 0; }
  return this.storage[ this.key ];
};
  
