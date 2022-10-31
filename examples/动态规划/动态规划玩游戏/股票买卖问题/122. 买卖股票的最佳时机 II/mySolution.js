/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  const n = prices.length
  const memo = new Map()
  
  // dp函数定义：dp(i, true or false)返回第i + 1天，持有或未持有股票时的最大收益。
  function dp(i ,h){
    // base case
    if(i === -1) {
      if(h) return -Infinity
      else return 0
    }
    
    const key = i + ',' + h
    if(memo.has(key)) return memo.get(key)
    
    let res = 0
    if(h) res = Math.max(dp(i - 1, h), dp(i - 1, false) - prices[i])
    else res = Math.max(dp(i - 1, h), dp(i - 1, true) + prices[i])
    memo.set(key, res)
    return res
  }
  return dp(n - 1, false)
};