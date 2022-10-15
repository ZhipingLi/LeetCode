/**
 * 注意：
 * 1. 从dungeon[0][0] -> dungeon[i][j]的定义是错误的。
 * 2. 骑士需要随时保持大于0的生命值，即使在每个房间吃血瓶之前。
 */

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
 var calculateMinimumHP = function(dungeon) {
  const m = dungeon.length, n = dungeon[0].length
  const memo = new Map()
  return dp(0, 0)
  
  // dp函数定义：dp(i, j)返回从dungeon[i][j]到dungeon[m - 1][n - 1]至少需要多少生命值
  function dp(i, j){
    // base case
    if(i === m || j === n) return Infinity
    if(i === m - 1 && j === n - 1) {
      if(dungeon[m - 1][n - 1] >= 0) return 1
      else return -dungeon[m - 1][n - 1] + 1
    }
    
    const key = i + ',' + j
    if(memo.has(key)) return memo.get(key)
    
    let res = Math.min(dp(i + 1, j), dp(i, j + 1)) - dungeon[i][j]
    if(res <= 0) res = 1
    memo.set(key, res)
    return res
  }
};