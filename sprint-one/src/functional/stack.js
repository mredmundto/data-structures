var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // key refers the previous one 
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    //delete storage[key - 1];
    key--;
    return storage[key];
  };

  someInstance.size = function() {
    if (key < 0) {
      return 0;
    }
    return key;
  };

  return someInstance;
};
