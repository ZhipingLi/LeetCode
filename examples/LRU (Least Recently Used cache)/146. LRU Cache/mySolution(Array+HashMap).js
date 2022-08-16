/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.cap = capacity
    this.map = new Map()
    this.cache = [] //使用数组将产生O(n)复杂度，不推荐
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)) return -1
    this.cache.splice(this.cache.indexOf(key),1)
    this.cache.push(key)
    return this.map.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        this.map.set(key,value)
        this.cache.push(key)
        this.cache.splice(this.cache.indexOf(key),1)
        return null
    }
    this.map.set(key,value)
    this.cache.push(key)
    if(this.map.size === this.cap + 1){
        const temp = this.cache[0]
        this.cache.shift()
        this.map.delete(temp)
    }
    return null
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */