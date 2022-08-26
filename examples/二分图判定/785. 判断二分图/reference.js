/**
 * @param {number[][]} graph
 * @return {boolean}
 */
 var isBipartite = function(graph) {
  let ok = true, visited = [], color = []
  for(const u in graph){
    if(!visited[Number(u)]) traverse(graph, Number(u))
  }
  return ok
  function traverse(graph, u){
    if(!ok) return
    for(const v of graph[u]){
      if(visited[v]){
        if(color[u] === color[v]) ok = false
      }else{
        visited[v] = true
        color[v] = !color[u]
        traverse(graph, v)
      }
    }
  }
};