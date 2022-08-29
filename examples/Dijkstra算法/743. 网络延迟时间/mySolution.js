/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var networkDelayTime = function(times, n, k) {
  const graph = buildGraph(times, n)
  const distTo = dijkstra(k - 1, graph)
  for(const dist of distTo){
    if(dist === Infinity) return -1
  }
  return Math.max(...distTo)
};

function buildGraph(times, n){
  const graph = Array.from({length: n}, () => [])
  for(const [u, v, w] of times){
    graph[u - 1].push([v - 1, w])
  }
  return graph
}

function dijkstra(start, graph){
  const distTo = new Array(graph.length).fill(Infinity)
  distTo[start] = 0
  const queue = [{
    id: start,
    distFromStart: 0
  }]
  while(queue.length){
    queue.sort((a, b) => b.distFromStart - a.distFromStart)
    const {id: curId, distFromStart: curDistFrom} = queue.pop()
    if(curDistFrom > distTo[curId]) continue
    for(const [v, w] of graph[curId]){
      if(distTo[v] > curDistFrom + w){
        queue.push({
          id: v,
          distFromStart: curDistFrom + w
        })
        distTo[v] = curDistFrom + w
      }
    }
  }
  return distTo
}