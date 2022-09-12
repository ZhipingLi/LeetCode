/**
 * 该问题可以转化为背包问题的描述形式：
 * 有一个背包，最大容量为amount，有一系列物品coins，每个物品的重量为coins[i]，每个物品的数量无限。求有多少种方法，能够把背包恰好装满。
 */

/* dp函数解法 */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
  const memo = new Map()
  return dp(coins.length, amount)

  // dp函数定义：dp(i, j)返回使用前i种硬币凑成总金额为j的硬币组合数。
  function dp(i, j){
    // base case
    if(j === 0) return 1
    if(i === 0) return 0

    const key = i + ',' + j
    if(memo.has(key)) return memo.get(key)

    let val = 0
    const coin = coins[i - 1]
    if(j - coin >= 0) val = dp(i, j - coin) + dp(i - 1, j)
    else val = dp(i - 1, j)
    memo.set(key, val)
    return val
  }
};

/* dp数组解法 */
var change = function(amount, coins) {
  // dp数组定义：dp[i][j]为使用前i种硬币可以凑出总金额为j的凑法数。
  const dp = Array.from({length: coins.length + 1}, () => new Array(amount + 1).fill(0))
  // base case
  for(let i = 0; i <= coins.length; i++){
    dp[i][0] = 1
  }
  for(let i = 1; i <= coins.length; i++){
      for(let j = 1; j <= amount; j++){
        const coin = coins[i - 1]
        if(j - coin >= 0) dp[i][j] = dp[i - 1][j] + dp[i][j - coin]
        else dp[i][j] = dp[i - 1][j]
      }
  }
  return dp[coins.length][amount]
}

/**
 * 通过观察可以发现，dp数组的转移只和dp[i][...]和dp[i-1][...]有关，所以可以压缩状态，进一步降低算法的空间复杂度。
 */

/* 状态压缩 */
var change = function(amount, coins) {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1 // base case
  for(let i = 1; i <= coins.length; i++){
      for(let j = 1; j <= amount; j++){
        const coin = coins[i - 1]
        if(j - coin >= 0) dp[j] = dp[j] + dp[j - coin]
      }
  }
  return dp[amount]
}