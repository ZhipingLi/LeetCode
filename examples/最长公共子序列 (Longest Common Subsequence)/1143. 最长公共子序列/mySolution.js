/**
 * 最长公共子序列（Longest Common Subsequence，简写 LCS）
 * 对于两个字符串求子序列的问题，都是用两个指针i和j分别在两个字符串上移动，大概率是动态规划思路。
 */
 /* dp函数解法 */
 var longestCommonSubsequence = function(text1, text2) {
  const memo = Array.from(text1, () => new Array(text2.length))
  return dp(0, 0)

  // dp函数定义：计算并返回text1[i...]和text2[j...]的最长公共子序列长度
  function dp(i, j){
    // base case
    if(i === text1.length || j === text2.length) return 0
    if(memo[i][j]) return memo[i][j]
    if(text1[i] === text2[j]) {
      // text1[i]和text2[j]都应该在LCS中
      memo[i][j] = 1 + dp(i + 1, j + 1)
    }else {
      // text1[i]和text2[j]中至少有一个不在LCS中（都不在LCS的情况因返回数值最小，可省）
      memo[i][j] = Math.max(dp(i + 1, j), dp(i, j + 1))
    }
    return memo[i][j]
  }
};

 /* dp数组解法（可进一步状态压缩）*/
 var longestCommonSubsequence = function(text1, text2) {
  const m = text1.length, n = text2.length
  // dp数组定义：dp[i][j]为text1[0...i-1]和text2[0...j-1]的最长公共子序列长度
  // 目标：text1[0...m-1]和text2[0...n-1]的最长公共子序列长度，即dp[m][n]
  // base case：dp[0][...] = dp[...][0] = 0
  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0))
  for(let i = 1; i <= m; i++){
    for(let j = 1; j <= n; j++){
      if(text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }else{
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
}