/**
 * 拓扑排序(Topological Sorting)：
 *   * 直观地说就是，让你把一幅图“拉平”，而且这个“拉平”的图里面，所有箭头方向都是⼀致的。
 *   * 很显然，如果⼀幅有向图中存在环，是无法进行拓扑排序的，因为肯定做不到所有箭头方向⼀致；
 *   * 反过来，如果⼀幅图是**有向无环图**，那么⼀定可以进行拓扑排序。
 * 
 * 如果把课程抽象成节点，课程之间的依赖关系抽象成有向边，那么这幅图的拓扑排序结果就是上课顺序。
 * 
 * 将后序遍历的结果进行反转，就是拓扑排序的结果。
 * 注意：
 *   * 不能直接使用前序遍历结果。
 *   * 需要搭配visited使用，否则会重复添加元素，进而导致reverse()之后的顺序有误。
 *   * 如果未使用visited，去重（按前后顺序）应该放在reverse()之前。
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites)
  let visited = [], onPath = [], hasCycle = false, arr = []
  for(const u in graph){
    traverse(graph, Number(u))
  }
  return hasCycle ? [] : arr.reverse()
  function traverse(graph, u){
    if(onPath[u]) hasCycle = true
    if(visited[u] || hasCycle) return
    visited[u] = true
    onPath[u] = true
    for(const v of graph[u]){
      traverse(graph, v)
    }
    arr.push(u) //后序遍历位置
    onPath[u] = false
  }
};

function buildGraph(numCourses, prerequisites){
  const graph = Array.from({length: numCourses}, () => [])
  for(const arr of prerequisites){
    const from = arr[1]
    const to = arr[0]
    graph[from].push(to)
  }
  return graph
}

/**
 * Array.prototype.includes和Array.prototype.indexOf的区别:
 * includes可以判断数组是否存在NaN的元素，而indexOf不能。
 * Example：
 *   const arr = ['a', 'b', NaN]
 *   console.log(arr.includes(NaN)) // true
 *   console.log(arr.indexOf(NaN)) // -1
 */

