/**
 * 数据结构： HashMap + LinkedHashSet
 * LinkedHashSet 顾名思义，是链表和哈希集合的结合体。
 * 链表不能快速访问链表节点，但是插⼊元素具有时序；哈希集合中的元素⽆序，但是可以对元素进⾏快速的访问和删除。
 * 本解法使用Map + Set，但只使用到了Map的字典属性，故可以看作是Java中的HashMap。
 * 另外，本解法未再重新实现LinkedHashSet，因为JS中的Set具有时序性，相当于Java中的LinkedHashSet。
 */

/**
 * @param {number} capacity
 */
 var LFUCache = function(capacity) {
    this.cap = capacity
    this.keyToVal = new Map() // One-to-One: Key - Value
    this.keyToFreq = new Map() // One-to-One: Key - Frequency
    this.freqToKeys = new Map() // One-to-Many: Frequency - Key Set
    this.minFreq = 0
    this.increaseFreq = function(key){
        // update keyToFreq
        const freq = this.keyToFreq.get(key)
        this.keyToFreq.set(key,freq+1)
        // update freqToKeys
        const freqSet = this.freqToKeys.get(freq)
        freqSet.delete(key)
        if(this.freqToKeys.has(freq+1)) this.freqToKeys.get(freq+1).add(key)
        else this.freqToKeys.set(freq+1,new Set([key]))
        // update minFreq
        freqSet.size === 0 && this.minFreq === freq && this.minFreq++
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(!this.keyToVal.has(key)) return -1
    this.increaseFreq(key)
    return this.keyToVal.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.cap === 0) return null
    if(this.keyToVal.has(key)){
        this.keyToVal.set(key,value)
        this.increaseFreq(key)
        return null
    }else{
        if(this.cap === this.keyToVal.size){
            // this.freqToKeys -> Map
            // this.freqToKeys.get(this.minFreq) -> Set
            // this.freqToKeys.get(this.minFreq).keys/values/entries() -> Set Iterator: not Array, thus indices can not be used to locate elements in Set (SetIterator[index] is false)
            // this.freqToKeys.get(this.minFreq).keys/values().next() -> Obejct{ value:xxx, done:false }: the first object of the SetIterator ( Set.keys() equals to Set.values() )
            // this.freqToKeys.get(this.minFreq).entries().next() -> Obejct{ value:Array(2)[xxx,xxx], done:false }: the first object of the SetIterator
            // Set Iterator遍历顺序与添加顺序相同，相当于Java中的LinkedHashSet
            // Set、Map ==> Array: Array.from(Set/Map) or [...Set/Map]
            // Array ==> Set、Map: new Set/Map(Array)
            /**
             * 补充：（2022-8-13）
             * Set、Map原型上的keys/values/entires返回的对象既是一个迭代器，也是一个可迭代对象。
             * 另外，Set、Map原型上实现了[@@iterator]（Set、Map为可迭代对象）和forEach()，且这两个方法的遍历顺序也是按插入顺序实现的。
             * 故，此处也可使用for...of和forEach遍历第一个元素。
             * tips:
             *      for item of Map ==> item: [key, value]
             *      for item of Set ==> item: key
             *      Map.forEach ==> parameter_1: value, parameter_2: key
             *      Set.forEach ==> parameter_1: value, parameter_2: none
             */
            const deletedKey = this.freqToKeys.get(this.minFreq).keys().next().value
            this.keyToVal.delete(deletedKey)
            this.keyToFreq.delete(deletedKey)
            this.freqToKeys.get(this.minFreq).delete(deletedKey)
        }
        this.keyToVal.set(key,value)
        this.keyToFreq.set(key,1)
        if(this.freqToKeys.has(1)) this.freqToKeys.get(1).add(key)
        else this.freqToKeys.set(1,new Set([key])) // new Set() 参数为空或可迭代对象
        this.minFreq = 1
    }
    return null
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */