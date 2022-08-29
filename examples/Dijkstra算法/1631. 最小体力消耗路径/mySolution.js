/**
 * 该题评判一条路径是长还是短的标准不再是路径经过的权重总和，而是路径经过的权重最大值。
 */

/**
 * @param {number[][]} heights
 * @return {number}
 */
 var minimumEffortPath = function(heights) {
  const graph = buildGraph(heights)
  return dijkstra(0, graph.length - 1, graph, heights[0].length)
};

function buildGraph(heights) {
  const m = heights.length
  const n = heights[0].length
  const graph = Array.from({length: m * n}, () => [])
  for(let i = 0; i <= m - 1; i++){
    for(let j = 0; j <= n - 1; j++){
      const height = heights[i][j]
      const index = i * n + j
      if(i - 1 >= 0) graph[index].push({
        up: Math.abs(height - heights[i - 1][j])
      })
      if(i + 1 <= m - 1) graph[index].push({
        down: Math.abs(height - heights[i + 1][j])
      })
      if(j - 1 >= 0) graph[index].push({
        left: Math.abs(height - heights[i][j - 1])
      })
      if(j + 1 <= n - 1) graph[index].push({
        right: Math.abs(height - heights[i][j + 1])
      })
    }
  }
  return graph
}

function dijkstra(start, end, graph, n){
  const distTo = new Array(graph.length).fill(Infinity)
  distTo[start] = 0
  const queue = [[start, 0]]
  while(queue.length){
    queue.sort((a, b) => b[1] - a[1])
    const [u, dist] = queue.pop()
    if(u === end) return dist
    if(dist > distTo[u]) continue
    for(const obj of graph[u]){
      const direction = Object.keys(obj)[0]
      const w = obj[direction]
      let v = -1
      switch(direction){
        case 'up':
          v = u - n
          break
        case 'down':
          v = u + n
          break
        case 'left':
          v = u - 1
          break
        case 'right':
          v = u + 1
          break
      }
      const nextW = Math.max(w, distTo[u])
      if(nextW < distTo[v]) {
        distTo[v] = nextW
        queue.push([v, nextW])
      }
    }
  }
}