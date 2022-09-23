/**
 * @param {number} K
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(K, prices) {
  const n = prices.length
  const memo = new Map()
  
  // dp函数定义：dp(i, k, true or false)返回第i + 1天，操作次数上限为k时，持有或未持有股票时的最大收益。
  function dp(i, k, h){
    //base case 
    if(i === -1) {
      if(h) return -Infinity // 第一天之前不可能持有股票
      else return 0 // 第一天之前未持有股票，收益为0
    }
    if(k === 0) { // 此时不能再买入股票了，但可以卖出股票
      if(h) return price[i] // 将关于i的if判断置于之前，否则此时i可能为-1
      else return 0
    }
    
    const key = i + ',' + k + ',' + h
    if(memo.has(key)) return memo.get(key)

    let res = 0
    if(h) res = Math.max(dp(i - 1, k, h), dp(i - 1, k - 1, false) - prices[i]) // 仅在买入股票时k减一
    else res = Math.max(dp(i - 1, k, h), dp(i - 1, k, true) + prices[i])
    memo.set(key, res)
    return res
  }
  return dp(n - 1, K, false)
};