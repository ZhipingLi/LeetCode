/**
 * 编辑距离问题无论是把s1变成s2还是反过来，结果都是一样的。
 * 
 * 代码框架：
 * base case：
 *    i走完s1或j走完s2，可以直接返回另一个字符串剩下的长度（都删除或插入）。
 * if s1[i] == s2[j]:
 *    啥都别做（skip）
 *    i, j 同时向前移动
 * else:
 *    三选一：
 *        插入（insert）
 *        删除（delete）
 *        替换（replace）
 * 
 * 重叠子问题判定方法：
 * def dp(i, j):
 *    dp(i - 1, j - 1) #1
 *    dp(i, j - 1)     #2
 *    dp(i - 1, j)     #3
 * 如果发现从子问题dp(i-1,j-1)出发，到达原问题dp(i,j)的路径不止一条，比如dp(i,j)->#1和dp(i,j)->#2->#3，就说明存在重复路径，也就是重叠子问题。
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 /* dp函数解法 */
 var minDistance = function(word1, word2) {
  const memo = new Map()
  return dp(m - 1, n - 1)

  // dp函数定义：返回word1[0...i] -> word[0...j]的最小编辑距离
  function dp(i, j){
    // base case
    if(i === -1) return j + 1
    if(j === -1) return i + 1
    if(memo.has(i + ',' + j)) return memo.get(i + ',' + j)
    let res = -1
    if(word1[i] === word2[j]){
      res = dp(i - 1, j - 1) // 啥都不做，跳过
    }else{
      res = Math.min(
        dp(i, j - 1), // 插入
        dp(i - 1, j), // 删除
        dp(i - 1, j - 1) // 替换
      ) + 1
    }
    memo.set(i + ',' + j, res)
    return res
  }
};
 
/* dp数组解法 */
var minDistance = function(word1, word2) {
  const m = word1.length, n = word2.length
  // dp数组定义：dp[i][j]为word1[0...i - 1] -> word2[0...j - 1]的最小编辑距离
  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0))
  // base case
  for(let i = 1; i <= m; i++){
    dp[i][0] = i
  }
  for(let j = 1; j <= n; j++){
    dp[0][j] = j
  }
  for(let i = 1; i <= m; i++){
    for(let j = 1; j <= n; j++){
      if(word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
      else{
        dp[i][j] = Math.min(
          dp[i][j - 1],
          dp[i - 1][j],
          dp[i - 1][j - 1]
        ) + 1
      }
    }
  }
  return dp[m][n]
}

/**
 * dp[i][j]只和它附近的三个状态有关，空间复杂度是可以进一步压缩成 O(min(M,N))（M，N为两个字符串的长度，base case情况）。
 * 
 * 对每一步的操作加以记录，可以求得最小编辑路径。
 */
