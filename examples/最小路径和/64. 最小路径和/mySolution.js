/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  const m = grid.length, n = grid[0].length
  const memo = new Map()
  return dp(m - 1, n - 1)
  
  // dp函数定义：dp(i, j)返回从grid[0][0]到grid[i][j]的最小路径和
  // 注意：i、j的含义分别为第i + 1行、第j + 1列，并非坐标值
  function dp(i, j){
    // base case
    if(i < 0 || j < 0) return Infinity
    if(i === 0 && j === 0) return grid[0][0]
    
    const key = i + ',' + j
    if(memo.has(key)) return memo.get(key)
    
    let res = Math.min(dp(i - 1, j), dp(i, j - 1))+ grid[i][j]
    memo.set(key, res)
    return res
  }
};