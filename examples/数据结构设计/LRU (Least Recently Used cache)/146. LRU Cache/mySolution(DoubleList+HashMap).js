/**
    数据结构： HashMap + 双链表
    1. 为什么不适用单链表？
     - 在链表中删除某个节点，需要在前一节点上操作。
    2. 既然Map中已经存储了key，为什么在双链表中的节点还要存储key？
     - 在双链表中删除最久未操作节点时，需要在Map中也进行删除操作，此时可以从节点中通过val获取要删除的key。
    3. 为什么使用HashMap + 双链表的数据结构？
     - LRU 缓存算法的核⼼数据结构就是哈希链表（LinkedHashMap），即双向链表和哈希表（HashMap）的结合体。
     - LinkedHashMap与HashMap区别在于LinkedHashMap具有时序性（按添加元素的顺序）。
     - 该解法实际上就是利用Map + DoubleList构造了Java中的LinkedHashMap数据结构。
     - 在JS中，Map（具有时序性）就相当于是Java中的LinkedHashMap；而{}相当于Java中的HashMap。
     - 但在该解法中，只使用了到Map的字典属性，故可以看作是HashMap，且可以使用{}替代（Map.size使用Object.keys(obj).length替代），但{}效率不如Map。
*/

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
    return node.val
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