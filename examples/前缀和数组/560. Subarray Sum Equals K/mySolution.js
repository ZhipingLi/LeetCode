/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let preNum = new Map()
    preNum.set(0,1)
    let pre_j = 0
    let res = 0
    for(let i=1; i<=nums.length;i++){
        pre_j += nums[i-1]
        const pre_i = pre_j - k
        if(preNum.has(pre_i)) res+=preNum.get(pre_i)
        if(preNum.has(pre_j)){
            preNum.set(pre_j,preNum.get(pre_j)+1)
        }else{
            preNum.set(pre_j,1)
        }
    }
    return res
};