var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {}; 
  someInstance.key = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.key;
};

queueMethods.enqueue = function(input){
  this.storage[this.key] = input;
  this.key++; 
};
