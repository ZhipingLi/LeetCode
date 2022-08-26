/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
 var possibleBipartition = function(n, dislikes) {
  const graph = buildGraph(n, dislikes)
  let ok = true
  const visited = [], colors = []
  // 注意分析图是否联通
  for(const u in graph){
    traverse(graph, Number(u), undefined)
  }
  function traverse(graph, u, color){
    if(!ok) return
    if(visited[u]){
      if(color === undefined) return
      if(color === colors[u]) ok = false
      return
    }else{
      visited[u] = true
      colors[u] = !color
    }
    for(const v of graph[u]){
      traverse(graph, v, colors[u])
    }
  }
  return ok
};

function buildGraph(n, dislikes){
  const graph = Array.from({length: n}, () => [])
  dislikes.forEach(([a, b]) => {
    //「无向图」相当于「双向图」
    graph[a - 1].push(b - 1)
    graph[b - 1].push(a - 1)
  })
  return graph
}