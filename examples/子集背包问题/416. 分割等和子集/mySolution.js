/**
 * 对于该问题，可以先对集合求和，得出 sum，把问题转化为背包问题：
 * 给定一个可装载重量为 sum / 2 的背包和 N 个物品，每个物品的重量为 nums[i]。是否存在一种装法，能够恰好将背包装满？
 * 
 * 动态规划之dp数组解题步骤：
 * ①定义dp数组含义 -> ②根据dp数组定义，确定返回值 -> ③初始化dp数组 -> ④分析base case -> ⑤书写排除base case后的状态循环(for) -> ⑥完善状态转移方程
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 /* dp函数解法 */
 var canPartition = function(nums) {
  const sum = nums.reduce((prev, curr) => prev + curr)
  if(sum % 2 === 1) return false

  const cap = sum / 2
  const memo = new Map()
  return dp(nums.length, cap)

  // dp数组定义：dp(i, j)返回是否能够使用前i个数计算出j。
  function dp(i, j){
    // base case
    if(j === 0) return true
    if(i === 0) return false

    const key = i + ',' + j
    if(memo.has(key)) return memo.get(key)

    let val = null
    const num = nums[i - 1]
    if(j - num >= 0) val =  dp(i - 1, j) || dp(i - 1, j - num)
    else val =  dp(i - 1, j)
    memo.set(key, val)
    return val
  }
};

 /* dp数组解法 */
 var canPartition = function(nums) {
  const sum = nums.reduce((prev, curr) => prev + curr)
  if(sum % 2 === 1) return false

  const cap = sum / 2
  // dp数组定义：dp[i][j]表示是否能够通过前i个数计算出j。
  const dp = Array.from({length: nums.length + 1}, () => new Array(cap + 1).fill(false))
  // base case
  for(let i = 0; i <= nums.length; i++){
    dp[i][0] = true
  }
  for(let i = 1; i <= nums.length; i++){
    for(let j = 1; j <= cap; j++){
      const num = nums[i - 1]
      if(j - num >= 0) dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num]
      else dp[i][j] = dp[i - 1][j]
    }
  }
  return dp[nums.length][cap]
}