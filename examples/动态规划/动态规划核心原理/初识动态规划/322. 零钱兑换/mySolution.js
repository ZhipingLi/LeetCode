/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  // dp数组定义：当目标金额为i时，至少需要dp[i]枚硬币凑出。
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  // 外层 for 循环在遍历所有状态的所有取值
  for(let i = 1; i <= amount; i++){
    // 内层 for 循环在求所有选择的最小值
    for(const coin of coins){
      if(i < coin) continue
      dp[i] = Math.min(dp[i], dp[i - coin] + 1) // Infinity === Infinity + 1
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
