/**
 * 删除的结果的长度就是两字符串的最长公共子序列，故删除的次数可以通过最长公共子序列的长度推导出来。
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  const length = longestCommonSubsequenceLength(word1, word2)
  return word1.length - length + word2.length - length
};

function longestCommonSubsequenceLength(word1, word2){
  const m = word1.length, n = word2.length
  // dp数组定义：dp[i][j]表示word1[0...i]和word2[0...j]的最长公共子序列长度
  const dp = Array.from(word1, () => new Array(n).fill(0))
  for(let i = 0; i <= m - 1; i++){
    for(let j = 0; j <= n - 1; j++){
      // base case
      if(i === 0 && j === 0 && word1[i] === word2[j]){
        dp[0][0] = 1
        continue
      }
      if(word1[i] === word2[j]){
        if(i - 1 < 0 || j - 1 < 0) dp[i][j] = 1
        else dp[i][j] = dp[i - 1][j - 1] + 1
      }else{
        dp[i][j] = Math.max(i - 1 < 0 ? 0 : dp[i - 1][j], j - 1 < 0 ? 0 : dp[i][j - 1])
      }
    }
  }
  return dp[m - 1][n - 1]
}