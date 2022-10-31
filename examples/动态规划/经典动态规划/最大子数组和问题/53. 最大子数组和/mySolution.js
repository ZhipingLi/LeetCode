/**
 * 该题不能使用滑动窗口算法，因为数组中的数字可以是负数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  // dp数组定义：以nums[i]为结尾的最大子数组和为dp[i]
  const dp = [...nums]
  let max = nums[0]
  // 状态
  for(let i = 1; i <= nums.length - 1; i++){
    // 选择
    // 此处dp[i]只有两种「选择」：要么与前面的相邻子数组连接，形成一个和更大的子数组；要么不与前面的子数组连接，自成一派，自己作为一个子数组。
    // 可见，dp[i]仅仅和dp[i - 1]的状态有关，所以可以进行状态压缩。
    dp[i] = Math.max(dp[i], dp[i - 1] + nums[i])
    max = Math.max(dp[i], max)
  }
  return max
};

/* 状态压缩 */
var maxSubArray = function(nums) {
  let dp_curr = nums[0], max = nums[0]
  for(let i = 1; i <= nums.length - 1; i++){
    dp_curr = Math.max(nums[i], dp_curr + nums[i])
    max = Math.max(dp_curr, max)
  }
  return max
};