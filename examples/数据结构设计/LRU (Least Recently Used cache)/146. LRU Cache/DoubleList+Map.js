class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    push(key, val) {
        const newNode = new Node(key, val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        return newNode;
    }
    
    remove(node) {
        if(!node.next && !node.prev) { // if there's only 1 node
            this.head = null;
            this.tail = null;
        } else if(!node.next) { // if the node is tail node
            this.tail = node.prev;
            this.tail.next = null;
        } else if(!node.prev) { // if the node is head node
            this.head = node.next;
            this.head.prev = null;
        } else { // if the node is in between
            const prev = node.prev;
            const next = node.next;
            prev.next = next;
            next.prev = prev;
        }
    }
  }
  
  class LRUCache {
    constructor(capacity) {
        this.DLL = new DoublyLinkedList();
        this.map = new Map();
        this.capacity = capacity;
    }
  
    get(key) {
        const val = this.map.get(key)
        if(!val) return -1;
        const value = val.val;
        this.DLL.remove(val);
        this.map.set(key, this.DLL.push(key, value));
        return value;
    }
  
    put(key, value) {
        const val = this.map.get(key)
        if(val) this.DLL.remove(val);
        this.map.set(key, this.DLL.push(key, value));
        if(this.map.size > this.capacity) {
            const currKey = this.DLL.head.key;
            this.map.delete(currKey)
            this.DLL.remove(this.DLL.head);
        }
    }
  }