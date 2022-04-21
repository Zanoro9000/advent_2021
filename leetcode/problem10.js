export function problem(){
  const lRUCache = new LRUCache(2);
  lRUCache.put(1, 1); // cache is {1=1}
  lRUCache.log();
  lRUCache.put(2, 2); // cache is {1=1, 2=2}
  lRUCache.log();
  lRUCache.get(1);    // return 1
  lRUCache.log();
  lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  lRUCache.log();
  lRUCache.get(2);    // returns -1 (not found)
  lRUCache.log();
  lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
  lRUCache.log();
  lRUCache.get(1);    // return -1 (not found)
  lRUCache.log();
  lRUCache.get(3);    // return 3
  lRUCache.log();
  lRUCache.get(4);    // return 4
}

//https://leetcode.com/problems/lru-cache/
// Map stores values in insert order, so we can use that by deleting and re-adding keys whenever they are updated
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.data = new Map();
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const val = this.data.get(key);
  if (val !== undefined) {
    this.data.delete(key);
    this.data.set(key, val);
  }
  return val ?? -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.data.delete(key);
  this.data.set(key, value);
  if (this.data.size > this.capacity) {
    this.data.delete(this.data.keys().next().value)
  }
};

LRUCache.prototype.log = function() {
  console.debug(this.data)
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */