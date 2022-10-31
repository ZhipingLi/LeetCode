/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
/* dp函数解法 */
 var maxProfit = function(prices) {
  const n = prices.length
  const memo = new Map()
  return dp(n - 1, false)
    
  // dp函数定义：dp(i, h)返回第i + 1天，持有或未持有股票的最大收益。
  function dp(i, h){
    //base case
    if(i === -1){
      if(h) return -Infinity
      else return 0
    }
    if(i === 0){
      if(h) return -prices[0]
      else return 0
    }
    
    const key = i + ',' + h
    if(memo.has(key)) return memo.get(key)
    
    let res = 0
    if(h){
      // 今日需要购入股票，必须保证今天不是冷冻期，即昨天没有卖出股票。
      // 保证昨天没有卖出股票的方式为保证前天截止时手上未拥有股票（dp(i - 2, false)）。
      res = Math.max(dp(i - 1, true), dp(i - 2, false) - prices[i])
    }else{
      res = Math.max(dp(i - 1, false), dp(i - 1, true) + prices[i])
    }
    memo.set(key, res)
    return res
  }
};

/* dp数组解法 */
 var maxProfit = function(prices) {
  const n = prices.length
  // dp数组定义：dp[i][h]表达第i + 1天，持有或未持有股票的最大收益。
  const dp = Array.from(prices, () => [])
  // base case
  dp[0] = [0, -prices[0]]
  
  for(let i = 1; i <= n - 1; i++){
    // 处理dp[-1]问题
    if(i - 2 === -1) dp[i - 2] = [0]
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]) 
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
  }
  return dp[n - 1][0]
};