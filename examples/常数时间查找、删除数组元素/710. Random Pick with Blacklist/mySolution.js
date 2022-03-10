/**
 * @param {number} n
 * @param {number[]} blacklist
 */
 var Solution = function(n, blacklist) {
    this.cut = n - blacklist.length
    this.map = new Map()
    blacklist.forEach(item => {
        this.map.set(item,666)
    })
    let last = n - 1
    blacklist.forEach(item => {
        if(item>this.cut-1) return
        while(this.map.has(last)) last--
        this.map.set(item,last--)
    })
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
    const random = Math.floor(Math.random()*this.cut)
    if(this.map.has(random)) return this.map.get(random)
    else return random
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */