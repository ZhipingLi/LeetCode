/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
  this.map = new Map()
  nums.forEach((item, index) => {
    if(this.map.has(item)) this.map.get(item).push(index)
    else this.map.set(item, [index])
  })
 };
 
 /** 
  * @param {number} target
  * @return {number}
  */
 Solution.prototype.pick = function(target) {
   const arr = this.map.get(target)
   const length = arr.length
   const random = Math.floor(Math.random() * length)
   return arr[random]
 };
 
 /**
  * Your Solution object will be instantiated and called as such:
  * var obj = new Solution(nums)
  * var param_1 = obj.pick(target)
  */