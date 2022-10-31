/**
 * 最长递增子序列（Longest Increasing Subsequence，简写 LIS）
 * 注意「子序列」和「子串」这两个名词的区别，子串一定是连续的，而子序列不一定是连续的。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/* 动态规划解法 时间复杂度：O(N^2)*/
 var lengthOfLIS = function(nums) {
  // dp数组定义：dp[i]表示以nums[i]这个数结尾的最长递增子序列的长度。
  const dp = new Array(nums.length).fill(1)
  let max = 1
  // 状态
  for(let i = 1; i <= nums.length - 1; i++){
    // 选择
    for(let j = 0; j <= i - 1; j++){
      if(nums[j] >= nums[i]) continue
      dp[i] = Math.max(dp[i], dp[j] + 1)
      max = Math.max(dp[i], max)
    }
  }
  return max
};