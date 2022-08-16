/**
  数据结构： Java: LinkedHashMap(JS: Map)
*/

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.cache = new Map()
  this.cap = capacity
};

LRUCache.prototype.updatePriority = function(key) {
  const val = this.cache.get(key)
  this.cache.delete(key)
  this.cache.set(key, val)
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(!this.cache.has(key)) return -1
  this.updatePriority(key)
  return this.cache.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.cache.has(key)){ //modify
    this.cache.set(key, value)
    this.updatePriority(key)
  }else{  //add
    if(this.cap === this.cache.size){
      for(const entry of this.cache){
        const deletedKey = entry[0]
        this.cache.delete(deletedKey)
        break
      }
    }
    this.cache.set(key, value)
    return null
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */