/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    const n = nums.length, arr = []
    nums = nums.concat(nums)
    let res = new Array(2*n)
    for(let i=2*n-1; i>=0; i--){
        const num = nums[i]
        while(arr.length && num >= arr[arr.length-1]){
            arr.pop()
        }
        res[i] = arr.length ? arr[arr.length-1] : -1
        arr.push(num)
    }
    return res.splice(0,n)
};

//改进： 利⽤循环数组的技巧来模拟数组⻓度翻倍，而非构造新数组

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    const n = nums.length, arr = []
    let res = new Array(n)
    for(let i=2*n-1; i>=0; i--){
        const num = nums[i%n]
        while(arr.length && num >= arr[arr.length-1]){
            arr.pop()
        }
        res[i%n] = arr.length ? arr[arr.length-1] : -1
        arr.push(num)
    }
    return res
};