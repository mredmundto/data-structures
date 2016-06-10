

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(keyToAdd, v) {
  var index = getIndexBelowMaxForKey(keyToAdd, this._limit);
  // If the object exists and the keys are different, this avoids replace but allow collision 
  if (this._storage.get(index) !== undefined && !this._storage.get(index).hasOwnProperty(keyToAdd)) {   
    // add new key : value pair 
    this._storage.get(index)[keyToAdd] = v;   
  } else {
    //assign to a new object for new addition and replace 
    var tempObj = { [keyToAdd]: v};
    this._storage.set(index, tempObj);
  }
};

HashTable.prototype.retrieve = function(keyToRetrieve) {
  var index = getIndexBelowMaxForKey(keyToRetrieve, this._limit);
  return this._storage.get(index)[keyToRetrieve];
};

HashTable.prototype.remove = function(keyToDelete) {
  var index = getIndexBelowMaxForKey(keyToDelete, this._limit);
  this._storage.each(function(obj) {
    for (var existingKey in obj) { 
      if (existingKey === keyToDelete) {
        // to remove by setting that to an empty object 
        this._storage.set(index, {});
      }
    }
  }.bind(this)); // remember to bind this otherwise this refers to the global object since that's within another function scope 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */ //insert and retrieve are constant. remove is linear 


