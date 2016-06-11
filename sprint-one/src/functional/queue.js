var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // var storage = {};
  // var key = 0; 

  // using head and tail to implement 
  var storage = {};
  var head = 0; 
  var tail = 0; 


  someInstance.enqueue = function(value) {
    // storage[key] = value;
    // key++;
    storage[tail] = value; 
    tail++;  
  };

  someInstance.dequeue = function() {
    // var temp = storage[0];
    // for (var keys in storage) {
    //   if (storage[Number(keys) + 1] !== undefined) {
    //     storage[keys] = storage[Number(keys) + 1];  
    //   } else {
    //     delete storage[keys];
    //   }
    // } 
    // key--; 
    // return temp;

    // constant time dequeue 
    // check if the stoarge is not zero 
    if (head !== tail) {
      // storage this in a dequeue value 
      var dequeueValue = storage[head];
      delete storage[head];
      // increase the head
      head++; 
      return dequeueValue;
    }
  };

  someInstance.size = function() {
    // if (key < 0) { return 0; } 
    // return key; 
    return tail - head; 
  };

  return someInstance;
};
