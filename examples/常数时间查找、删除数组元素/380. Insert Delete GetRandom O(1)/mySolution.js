/**
 * 1. 通过Map对象映射实现O(1)的数组插入、查找操作，通过将要删除元素与数组尾元素交换后再pop()实现O(1)的数组删除操作。
 * 2. 也可使用Map对象+链表实现
 */
var RandomizedSet = function() {
    this.map = new Map()
    this.arr = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false
    this.arr.push(val)
    this.map.set(val,this.arr.length-1)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) return false
    const index = this.map.get(val)
    const temp = this.arr[this.arr.length-1]
    this.arr[index] = temp
    this.arr.pop()
    this.map.set(temp,index) // 先delete()再set()()在map中只有一个数时会出错
    this.map.delete(val)
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIdx = Math.floor(Math.random()*this.map.size)
    return this.arr[randomIdx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */