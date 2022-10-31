/**
 * 该题给定图为无向图，可以理解为双向图；同时，不需要使用visited数组，因为dijkstra算法通过比对权重不会走回头路。
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
 var maxProbability = function(n, edges, succProb, start, end) {
  const graph = buildGraph(n, edges, succProb)
  return dijkstra(start, end, graph)
};

function buildGraph(n, edges, succProb){
  const graph = Array.from({length: n}, () => [])
  for(const i in edges){
    const [a, b] = edges[Number(i)]
    const w = succProb[Number(i)]
    graph[a].push([b, w])
    graph[b].push([a, w])
  }
  return graph
}

function dijkstra(start, end, graph){
  const distTo = new Array(graph.length).fill(0)
  distTo[start] = 1
  const queue = [[start, 1]]
  while(queue.length){
    queue.sort((a, b) => a[1] - b[1])
    const [u, dist] = queue.pop()
    if(u === end) return dist
    if(dist < distTo[u]) continue
    for(const [v, w] of graph[u]){
      const nextW = w * dist
      if(nextW > distTo[v]){
        distTo[v] = nextW
        queue.push([v, nextW])
      }
    }
  }
  return 0
}