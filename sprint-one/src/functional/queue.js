var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var key = 0; 
  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    var temp = storage[0];
    for (var keys in storage) {
      if (storage[Number(keys) + 1] !== undefined) {
        storage[keys] = storage[Number(keys) + 1];  
      } else {
        delete storage[keys];
      }
    } 
    key--; 
    return temp;
  };

  someInstance.size = function() {
    if (key < 0) { return 0; } 
    return key; 
  };

  return someInstance;
};
