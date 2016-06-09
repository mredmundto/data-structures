var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.key = 0; 
  this.storage = {};
};


Queue.prototype.size = function() {
  return this.key;
};

Queue.prototype.enqueue = function(input) {
  this.storage[this.key] = input;
  this.key++; 
};

Queue.prototype.dequeue = function() {
  // store the first value in the quene, to return later 
  var temp = this.storage[0];
  
  for (var keys in this.storage) {
    // to check if last key in storage
    if (this.storage[Number(keys) + 1] !== undefined) {
      // if not last key, move next one in storage to the current key 
      this.storage[keys] = this.storage[Number(keys) + 1 ];
    } else {
      // if last, delete 
      delete this.storage[keys];
    }
  }
  
  this.key--; 
  if (this.key < 0) { this.key = 0; }
  return temp;
};


