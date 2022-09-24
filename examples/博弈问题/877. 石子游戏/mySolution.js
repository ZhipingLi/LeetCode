/**
 * 本题不能单纯地比较首尾两堆石子的数量大小，然后决定Alice（先手）选择哪堆石子。
 * 因为首尾两堆石子的数量可能相等（eg: [3,7,2,3]），此时不能随意地选择首堆或尾堆石子，需要使用动态规划。
 */

/**
 * @param {number[]} piles
 * @return {boolean}
 */
/* 石子堆数恒为偶数；石子总数恒为奇数；-> 先手必赢*/
var stoneGame = function(piles) {
  const n = piles.length
  const memo = new Map()
  return dp(0, n - 1, true) - dp(0, n - 1, false) > 0
  
  // dp函数定义：dp(i, j, true or false)返回从piles[i...j]中先手或者后手选的最优解（最多石子数）。
  function dp(i, j, first){
    // base case
    if(i >= j){
      if(i === j){
        if(first) return piles[i]
        else return 0
      }
      return 0
    }

    const key = i + ',' + j + ',' + first
    if(memo.has(key)) return memo.get(key)

    let res = 0
    const left = piles[i] + dp(i + 1, j, false)
    const right = piles[j] + dp(i, j - 1, false)
    if(first) res = Math.max(left, right)
    else{
      // dp(i, j, false) === dp(i + 1, j, true)
      if(left >= right) res = dp(i + 1, j, true)
      // dp(i, j, false) === dp(i, j - 1, true)
      else res = dp(i, j - 1, true)
    }
    memo.set(key, res)
    return res
  }
};
