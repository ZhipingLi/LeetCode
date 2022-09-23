/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  const n = nums.length
  if(n === 1) return nums[0] // 注意：考虑数组只有一个元素的情况
  const memo = new Map()
  return Math.max(dp(0, n - 2), dp(1, n - 1))
  
  // dp函数定义：dp(i, j)返回[i...j]能偷窃到的最高金额。
  function dp(i, j){
    //base case
    if(i > j) return 0
    
    const key = i + ',' + j
    if(memo.has(key)) return memo.get(key)
    
    let res = 0
    res = Math.max(dp(i + 2, j) + nums[i], dp(i + 1, j))
    memo.set(key, res)
    return res
  }
};