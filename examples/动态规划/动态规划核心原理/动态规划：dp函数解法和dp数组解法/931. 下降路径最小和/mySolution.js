/* dp函数解法（自顶向下）：dp() + memo[] */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var minFallingPathSum = function(matrix) {
  const n = matrix.length
  const memo = Array.from({length: n}, () => [])
  let res = Infinity
  for(let j = 0; j <= n - 1; j++){
    res = Math.min(res, dp(n - 1, j - 1), dp(n - 1, j), dp(n - 1, j + 1))
  }
  return res

  // dp函数定义：从第一行（matrix[0][..]）向下落，落到位置 matrix[i][j] 的最小路径和为 dp(matrix, i, j)
  function dp(i, j){
    if(i < 0 || j < 0 || i === n || j === n) return Infinity
    if(i === 0) return matrix[0][j]
    if(memo[i][j]) return memo[i][j]
    memo[i][j] = matrix[i][j] + Math.min(dp(i - 1, j - 1), dp(i - 1, j), dp(i - 1, j + 1))
    return memo[i][j]
  }
};

/* dp数组解法（自底向上）：dp[]（dp数组兼顾兼顾迭代和备忘录的作用） */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const n = matrix.length
  // dp数组定义：从第一行（matrix[0][..]）向下落，落到位置 matrix[i][j] 的最小路径和为 dp[i][j]
  const dp = Array.from({length: n}, () => [])
  dp[0] = [...matrix[0]]
  for(let i = 1; i <= n - 1; i++){
    for(let j = 0; j <= n - 1; j++){
      // 收集可选项
      const options = [dp[i - 1][j]]
      // 处理下标越界
      if(j - 1 >= 0) options.push(dp[i - 1][j - 1])
      if(j + 1 <= n - 1) options.push(dp[i - 1][j + 1])
      dp[i][j] = matrix[i][j] + Math.min(...options)
    }
  }
  return Math.min(...dp[n - 1])
}