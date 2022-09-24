/**
 * 将「石头游戏」改的更具有一般性：
 * 一排石头堆，用一个数组piles表示，piles[i]表示第 i 堆石子有多少个。
 * 两人轮流拿石头，一次拿一堆，但是只能拿走最左边或者最右边的石头堆。
 * 假设两人都很「聪明」，所有石头被拿完后，返回先手和后手的最后得分（石头总数）之差。
 * 石头的堆数可以是任意正整数，石头的总数也可以是任意正整数，这样就能打破先手必胜的局面了。
 * 比如有三堆石头piles = [1, 100, 3]，先手不管拿 1 还是 3，能够决定胜负的 100 都会被后手拿走，后手会获胜。
 * 此时先手能获得 4 分，后手会获得 100 分，算法返回 -96。
 * 博弈问题的难点在于，两个人要轮流进行选择，而且都很「聪明」。
 * 
 * 三个状态：开始的索引 i、结束的索引 j、先手或者后手。
 * 
 * 两个选择：选择最左边的那堆石头、选择最右边的那堆石头。
 * 
 * dp定义：
 * dp[i][j][true] = x表示：对于piles[i...j] 这部分石头堆，先手能获得的最高分数为 x。
 * dp[i][j][false] = y表示：对于piles[i...j] 这部分石头堆，后手能获得的最高分数为 y。
 * 
 * 解释：
 * 作为先手，面对piles[i...j]时，有两种选择：
 * 要么选择最左边的那一堆石头，然后面对 piles[i + 1...j]，但是此时轮到对方，相当于自己变成了后手；
 * 要么选择最右边的那一堆石头，然后面对 piles[i...j - 1]，但是此时轮到对方，相当于自己变成了后手。
 * 
 * 作为后手，要等对方先手先选择，有两种情况：
 * 如果对方先手选择了最左边那堆，剩下了piles[i + 1...j]，此时轮到自己，自己变成了先手；
 * 如果先手先手选择了最右边那堆，剩下了piles[i...j - 1]，此时轮到自己，自己变成了先手。
 */

/**
 * @param {number[]} piles
 * @return {boolean}
 */
 var stoneGame = function(piles) {
  const n = piles.length
  const memo = new Map()
  return dp(0, n - 1, true) - dp(0, n - 1, false)
  
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
