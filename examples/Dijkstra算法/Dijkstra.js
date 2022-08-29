/**
 * Dijkstra算法：输入一幅图和一个起点，计算start到其他节点的最短距离。
 * Dijkstra算法要求不能存在负权重边; 处理带有负权重边的图，需要使用Bellman-Ford算法。
 * Dijkstra算法的依赖前提：路径随着边的增加，路径的总权重具有单调性。
 * @param {number} start
 * @param {number[][]} graph
 * @return {number[]}
 */
 function Dijkstra(start, graph) {
  // 图中节点的个数
  const n = graph.length
  // 记录最短路径的权重的dp table（求最小值，故初始化为正无穷）
  // 定义：distTo[i]的值就是节点start到达i的最短路径权重
  const distTo = new Array(n).fill(Infinity)
  // base case
  distTo[start] = 0
  // 模拟优先级队列，distFromStart较小的排在后面
  // 从起点start开始进行BFS
  const queue = [{
    id: start,
    distFromStart: 0
  }]

  while (queue.length) {
    queue.sort((a, b) => b.distFromStart - a.distFromStart)
    const {id: curID, distFromStart: curDistFromStart} = queue.pop()

    /* 有end时，同一curID第一次来到此处就会return */
    // 此时已经可以确定start到curID节点的最短路径为curDistFromStart了
    // 如果只想计算到某个节点（比如：end）的最短路径，在这里加一个判断就行了（前提：使用了优先级队列）
    if (curID === end) return curDistFromStart

    /* 无end时，同一curID第一次之后会来到此处continue */
    // 已经有一条更短的路径到达curID节点了（善后工作：直接continue）
    // 此处不能取'='：因为distTo[curID]的值是在节点放入队列时更新，意味着队列中不可能存在值小于distTo[curID]的curID节点
    if(curDistFromStart > distTo[curID]) continue

    /* 无end时，同一curID只有第一次才会来到此处 */
    // 此时：curDistFromStart === distTo[curID]

    // 将当前节点的相邻节点装入队列中
    for (const nextID of adj(curID)) {
      const nextDistFromStart = curDistFromStart + weight(curID, nextID)
      if(nextDistFromStart < distTo[nextID]){
        // 更新dp table
        distTo[nextID] = nextDistFromStart
        queue.push({
          id: nextID,
          distFromStart: nextDistFromStart
        })
      }
    }
  }
  return distTo
 }

 /* 返回节点from到节点to之间的边的权重 */
 function weight(from, to) {
  //...根据情况具体实现
 }

 /* 输入节点s，返回s的相邻节点 */
 function adj(u) {
  //...根据情况具体实现
 }