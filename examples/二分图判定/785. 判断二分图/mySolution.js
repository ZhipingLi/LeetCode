/**
 * 二分图(Bipartite Graph)：
 * 二分图的顶点集可分割为两个互不相交的子集，图中每条边依附的两个顶点都分属于这两个子集，且两个子集内的顶点不相邻。
 * 
 * 给你⼀幅「图」，请你用两种颜色将图中的所有顶点着色，且使得任意一条边的两个端点的颜色都不相同。
 * 这就是图的「双色问题」，其实这个问题就等同于二分图的判定问题。
 */

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
 var isBipartite = function(graph) {
  let ok = true, visited = [], colors = []
  // 因为图不⼀定是联通的，可能存在多个子图，所以要把每个节点都作为起点进行⼀次遍历
  for(const u in graph){
    // 作为起点遍历时，该节点的相邻节点颜色未知，此处使用undefined
    // 如果undefined出现在下方if分支中，则表示本次从起点遍历的是一个子图
    // 如果undefined出现在下方else分支中，则表示本次从起点遍历的图与之前遍历的某个图是联通的，因此不需要再遍历了，即：
    //   - 该节点在之前的遍历中已经按互斥原则被给予了正确的颜色
    //   - 如果该节点不止一个邻居节点，那么当其他邻居节点被遍历到时，该节点的颜色会被验证
    traverse(graph, Number(u), undefined) 
  }
  return ok

  function traverse(graph, u, color){
    if(!ok) return
    // 该节点未被访问过
    if(!visited[u]){
      visited[u] = true
      // 需要依据相邻节点的颜色来给该节点着色，使得两者颜色不同
      colors[u] = !color
    }else{ // 该节点被访问过
      if(color === undefined) return
      // 比较相邻节点的颜色和该节点的颜色，若相同则不为二分图
      if(colors[u] === color) ok = false
      // 注意：在visited[u]的情况下，一定要加上return；否则会在环中循环
      return
    }
    for(const v of graph[u]){
      traverse(graph, v, colors[u])
    }
  }
};