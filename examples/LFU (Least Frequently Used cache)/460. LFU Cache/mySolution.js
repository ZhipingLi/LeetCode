/**
 * @param {number} capacity
 */
 var LFUCache = function(capacity) {
    this.cap = capacity
    this.keyToVal = new Map() // One-to-One: Key - Value
    this.keyToFreq = new Map() // One-to-One: Key - Frequency
    this.freqToKeys = new Map() // One-to-One: Frequency - Key Set
    this.minFreq = 0
    this.increaseFreq = function(key){
        const freq = this.keyToFreq.get(key)
        this.keyToFreq.set(key,freq+1)
        const freqSet = this.freqToKeys.get(freq)
        freqSet.delete(key)
        if(this.freqToKeys.has(freq+1)) this.freqToKeys.get(freq+1).add(key)
        else this.freqToKeys.set(freq+1,new Set([key]))
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