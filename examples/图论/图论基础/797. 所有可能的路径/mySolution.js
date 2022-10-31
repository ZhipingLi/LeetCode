/**
 * 两种存储图的方式：邻接表、邻接矩阵
 * 对于邻接表来说，好处是占用的空间少；但是，邻接表无法快速判断两个节点是否相邻（邻接矩阵只需要访问matrix[i][j]即可）。
 * 
 * 图的遍历
 * 如果图包含环，遍历框架就要一个visited数组进行辅助；但判断图中是否存在环，需要用onPath数组。
 * 如果让你处理路径相关的问题，onPath数组会被用到的。
 */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
  const res = [], path = [], n = graph.length
  function traverse(graph, u){
    path.push(u)
    if(u === n - 1) {
      res.push([...path])
      path.pop()
      return 
    }
    for(let v of graph[u]){
      traverse(graph, v)
    }
    path.pop()
  }
  traverse(graph, 0)
  return res
};

