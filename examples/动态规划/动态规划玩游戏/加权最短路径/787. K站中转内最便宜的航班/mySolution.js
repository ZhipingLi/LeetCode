/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
/* 动态规划解法 */
 var findCheapestPrice = function(n, flights, src, dst, k) {
  const graph = buildGraph(n, flights)
  const memo = new Map()
  const result = dp(src, dst, k)
  return result === Infinity ? -1 : result
  
  // dp函数定义：从src到dst，k + 1步之内的最小花费。
  function dp(src, dst, k){
    // base case
    if(src === dst) return 0
    if(k === 0) {
      const index = graph[src].findIndex(([to, price]) => to === dst)
      if(index === -1) return Infinity
      else return graph[src][index][1]
    }
    
    const key = src + ',' + dst + ',' + k
    if(memo.has(key)) return memo.get(key)
    
    let res = Infinity
    for(const [to, price] of graph[src]){
      res = Math.min(res, dp(to, dst, k - 1) + price)
    }
    memo.set(key, res)
    return res
  }
};

function buildGraph(n, flights){
  const graph = Array.from({length: n}, () => [])
  for(const [from, to, price] of flights){
    graph[from].push([to, price])
  }
  return graph
}

/**
 * 使用Dijkstra算法计算带end的最小距离时，不能搭配for循环取得depth。
 * 因为使用Dijkstra算法计算有end的最小距离的前提是使用了优先级队列，但加上for循环会破坏队列的优先级。
 * 
 * 本题相比一般的Dijkstra算法而言，减小了剪枝范围（只有距离不是最小时且步数不是最小的时才剪枝）。
 * 否则，距离小但不符合步数要求的点会刷新distTo[dist]中的记录，导致距离大但符合步数要求的点被剪枝。
 */

/* Dijkstra解法 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const graph = buildGraph(n, flights)
  const distTo = new Array(n).fill(Infinity)
  distTo[src] = 0
  const edgeNumTo = new Array(n).fill(Infinity)
  edgeNumTo[src] = 0
  const queue = [[src, 0, 0]]
  while(queue.length){
    queue.sort((a, b) => b[1] - a[1])
    const [id, fee, edgeNum] = queue.pop()

    if(id === dst) return fee
    
    if(edgeNum === k + 1) continue

    for(const [to, price] of graph[id]){
      const nextFee = fee + price
      if(nextFee < distTo[to]){
        distTo[to] = nextFee
        edgeNumTo[to] = edgeNum + 1
      }
      // 剪枝：如果中转次数更多，花费还更大，那必然不会是最短路径
      if(nextFee > distTo[to] && edgeNum + 1 > edgeNumTo[to]) continue
      queue.push([to, nextFee, edgeNum + 1])
    }
  }
  return -1
}