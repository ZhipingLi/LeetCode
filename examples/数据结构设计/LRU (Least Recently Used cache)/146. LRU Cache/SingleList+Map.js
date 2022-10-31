class ListNode {
    constructor(key, val, next) {
        this.key = key ?? 0;
        this.val = val ?? 0;
        this.next = next || null;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.prevMap = new Map();
    this.dummy = new ListNode();
    this.tail = this.dummy;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.prevMap.has(key)) {
        return -1;
    }
    this.moveToTail(key);
    return this.tail.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.prevMap.has(key)) {
        this.moveToTail(key);
        this.tail.val = value;
        return;
    }
    
    if (this.size < this.capacity) {
        this.size += 1;
        const node = new ListNode(key, value);
        this.tail.next = node;
        this.prevMap.set(key, this.tail);
        this.tail = node;
        return;
    }
    
    const first = this.dummy.next;
    this.prevMap.delete(first.key);
    first.key = key;
    first.val = value;
    this.prevMap.set(key, this.dummy);
    this.moveToTail(key);
};

LRUCache.prototype.moveToTail = function(key) {
    const prev = this.prevMap.get(key);
    const curr = prev.next;
    if (curr === this.tail) {
        return;
    }
    
    prev.next = prev.next.next;
    this.tail.next = curr;
    curr.next = null;
    this.prevMap.set(curr.key, this.tail);
    this.prevMap.set(prev.next.key, prev);
    this.tail = curr;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */