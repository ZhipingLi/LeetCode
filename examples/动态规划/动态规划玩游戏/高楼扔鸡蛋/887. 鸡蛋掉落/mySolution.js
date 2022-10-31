/**
 * 「最坏情况」：鸡蛋破碎一定发生在搜索区间穷尽时。
 * 「最小操作数」：兼容「最坏情况」至少需要多少次操作数。
 * 
 * 状态：当前拥有的鸡蛋数、需要测试的楼层数
 * 
 * 选择：去哪层楼扔鸡蛋
 * 
 * 状态转移：
 * 如果鸡蛋碎了，那么鸡蛋的个数k应该减一，搜索的楼层区间应该从[1...n]变为[1...i - 1]共i - 1层。
 * 如果鸡蛋没碎，那么鸡蛋的个数k不变，搜索的楼层间区间应该从[1...n]变为[i + 1...n]共n - i层楼。
 * （注意：题意表明0 <= f <= n，故f可以等于0，在鸡蛋没碎的情况下，向上递归后，第i层楼其实就是第0层，可以被取到。）
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
 var superEggDrop = function(k, n) {
  const memo = new Map()
  return dp(k, n)

  // dp函数定义：dp(k, n)返回有k个鸡蛋，面对n层楼，确定f的最小操作次数。
  function dp(k, n){
    //base case
    if(k === 1) return n // 只有一个鸡蛋时，必须采用线性查找了。
    if(n === 0) return 0

    const key = k + ',' + n
    if(memo.has(key)) return memo.get(key)

    let res = Infinity
    for(let i = 1; i <= n; i++){
      const result = Math.max(
        dp(k - 1, i - 1), // 碎了
        dp(k, n - i) // 没碎
      ) + 1
      res = Math.min(res, result)
    }
    memo.set(key, res)
    return res
  }
};