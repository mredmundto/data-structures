

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // assign bucket which is an array using the get method if no bucket then create empty array using or operator
  var bucket = this._storage.get(index) || [];
  // loop through the bucket
  for (var i = 0; i < bucket.length; i++) {
    //if the first item in bucket is equal to k
    if (bucket[i][0] === k) {
      // if true, then change value of second element of array
      bucket[i][1] = v;
      // return;
      return;
    }
  }
  //push in array of values
  bucket.push([k, v]);
  // use the set method store bucket array to hash table at index value index 
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create a bucket and use get method with the property of index
  var bucket = this._storage.get(index);
  // loop through the bucket array
  for (var i = 0; i < bucket.length; i++) {    
    //check first item in bucket array is equal to the k
    if (bucket[i][0] === k) {
      // true then return value in bucket array
      return bucket[i][1];
    //
    }
  //
  }
  // return undefined if not found in loop
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create a bucket and use method with the property of index
  var bucket = this._storage.get(index);
  //loop through the bucket array
  for (var i = 0; i < bucket.length; i++) {
    //check if first item in bucket array is equal to item your are removing
    if (bucket[i][0] === k) {
      //remove the array in bucket using splice with index from loop
      bucket.splice(i, 1);
    //
    }
  //
  }
};


































// HashTable.prototype.insert = function(keyToAdd, v) {
//   var index = getIndexBelowMaxForKey(keyToAdd, this._limit);
//   // If the object exists and the keys are different, this avoids replace but allow collision 
//   if (this._storage.get(index) !== undefined && !this._storage.get(index).hasOwnProperty(keyToAdd)) {   
//     // add new key : value pair 
//     this._storage.get(index)[keyToAdd] = v;   
//   } else {
//     //assign to a new object for new addition and replace 
//     var tempObj = { [keyToAdd]: v};
//     this._storage.set(index, tempObj);
//   }
// };

// HashTable.prototype.retrieve = function(keyToRetrieve) {
//   var index = getIndexBelowMaxForKey(keyToRetrieve, this._limit);
//   return this._storage.get(index)[keyToRetrieve];
// };

// HashTable.prototype.remove = function(keyToDelete) {
//   var index = getIndexBelowMaxForKey(keyToDelete, this._limit);
//   this._storage.each(function(obj) {
//     for (var existingKey in obj) { 
//       if (existingKey === keyToDelete) {
//         // to remove by setting that to an empty object 
//         this._storage.set(index, {});
//       }
//     }
//   }.bind(this)); // remember to bind this otherwise this refers to the global object since that's within another function scope 
// };



/*
 * Complexity: What is the time complexity of the above functions?
 */ //insert and retrieve are constant. remove is linear 


