/**
 * 本题中，当课程出现循环引用时（即图中存在环），就无法修完所有课程。
 * 判断图中是否存在环，需要使用onPath数组：
 *   * 在一次路径中，在进入节点u的时候将onPath[u]标记为true，离开时标记回false；
 *   * 如果发现onPath[u]已经被标记，说明出现了环。
 *   * PS：参考贪吃蛇没绕过弯儿咬到自己的场景。
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
  let hasCycle = false, visited = [], onPath = []
  const graph = buildGraph(numCourses, prerequisites)
  // 注意：
  // 1. 图中并不是所有节点都相连，所以要用循环将所有节点都作为起点调用一次DFS搜索算法。
  // 2. 此处使用for...in，索引即代表节点。
  for(const u in graph){ 
    traverse(graph, Number(u))
  }
  return !hasCycle

  function traverse(graph, u){
    // visited：从始至终到访过的节点
    // onPath：本次路径到访过的节点

    // 出现环
    if(onPath[u]) hasCycle = true
    if(visited[u] || hasCycle) return
    // 前序遍历位置
    visited[u] = true
    onPath[u] = true
    for(const v of graph[u]){
      traverse(graph, v)
    }
    // 后序遍历位置
    onPath[u] = false
  }
};

// 绘图
function buildGraph(numCourses, prerequisites){
  const graph = Array.from({length: numCourses}, () => [])
  for(const arr of prerequisites){
    const from = arr[1]
    const to = arr[0]
    graph[from].push(to)
  }
  return graph
}