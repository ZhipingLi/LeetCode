class Node{
    constructor(key,val){
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

class DoubleList{
    constructor(){
        this.head = null
        this.tail = null
    }
    
    addLast(node){
        if(this.tail){
            this.tail.next = node
            node.prev = this.tail
            this.tail = this.tail.next
        }else{
            this.head = node
            this.tail = node
        }
        return null
    }
    
    remove(node){
        if(node.next && node.prev){
            node.prev.next = node.next
            node.next.prev = node.prev
            node.next = null
            node.prev = null
        }else if(node.next){
            this.head = this.head.next
            this.head.prev = null
            // node.next = null
        }else if (node.prev){
            this.tail = this.tail.prev
            this.tail.next = null
            // node.prev = null
        }else{
            this.head = null
            this.tail = null
        }
    }
    
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new DoubleList()
    this.map = new Map()
    this.cap = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)) return -1
    const node = this.map.get(key)
    this.cache.remove(node)
    this.cache.addLast(node)
    return this.map.get(key).val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.map.has(key)){
        const node = new Node(key,value)
        if(this.map.size === this.cap){
            this.map.delete(this.cache.head.key)
            this.cache.remove(this.cache.head)
        }
        this.map.set(key,node)
        return this.cache.addLast(node)
    }else{
        let node = this.map.get(key)
        this.cache.remove(node)
        node = new Node(key,value)
        this.map.set(key,node)
        return this.cache.addLast(node)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */