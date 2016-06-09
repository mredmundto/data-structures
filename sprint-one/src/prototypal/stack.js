var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstances = Object.create(stackMethods);
  someInstances.key = 0; 
  someInstances.storage = {};
  return someInstances; 

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
  // the item is still in the object, just point the key to previous one
  this.key--; 
  if (this.key < 0) { this.key = 0; }
  // key refers to the last value and returning the value 
  return this.storage[this.key];
};