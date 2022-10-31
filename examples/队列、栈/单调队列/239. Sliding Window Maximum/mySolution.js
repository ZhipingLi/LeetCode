/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let res = [], arr = []
    for(const i in nums){ 
        const num = nums[i]
        while(arr.length && arr[arr.length-1] < num){ //此处不能取等号
            arr.pop()
        }
        arr.push(num)
        if(i >= k-1){
            if(i > k-1){
                arr.length>1 && arr[0] === nums[i-k] && arr.splice(0,1) // arr为单调队列：[大→小]
            }
            res.push(arr[0])
        }
    }
    return res
};

// 注意：
// 1. Math.max(parameters: n1, n2, n3, ..., nX), 求数组最大化需要用扩展运算符：Math.max(...array)
// 2. for in循环中的i为字符串类型，与数值比较需要用弱等于'=='