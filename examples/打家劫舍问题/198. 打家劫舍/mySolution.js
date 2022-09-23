/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  const n = nums.length
  const memo = new Map()
  return dp(0)

  // dp函数定义：dp(i)返回[i...]能偷窃到的最高金额。
  function dp(i){
    // base case
    if(i >= n) return 0

    if(memo.has(i)) return memo.get(i)

    let res = 0
    res = Math.max(dp(i + 2) + nums[i], dp(i + 1))
    memo.set(i, res)
    return res
  }
};