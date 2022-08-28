/**
 * Kruskal算法：
 * 所谓最小生成树，就是图中若干边的集合(mst)，需要保证这些边：
 * 1. 包含图中的所有节点。
 * 2. 形成的结构是树结构（即不存在环）。
 * 3. 权重和最小。
 * 
 * 前两点可以利用Union-Find算法做到，第三点需要使用到贪心思路:
 * 将所有边按照权重从小到大排序，从权重最小的边开始遍历，如果这条边和mst中的其它边不会形成环，则这条边是最小生成树的一部分，将它加入mst集合；
 * 否则，这条边不是最小生成树的一部分，不要把它加入mst集合。
 * 
 * Kruskal算法复杂度分析：
 * 假设一幅图的节点个数为V，边的条数为E，首先需要O(E)的空间装所有边，而且Union-Find算法也需要O(V)的空间，所以Kruskal算法总的空间复杂度就是O(V+E)。
 * 时间复杂度主要耗费在排序，需要O(ElogE)的时间，Union-Find算法所有操作的复杂度都是O(1)，套一个 for 循环也不过是O(E)，所以总的时间复杂度为O(ElogE)。
 */

const {Union_Find} = require('../../Union-Find（并查集算法）/Union-Find')

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
 var minimumCost = function(n, connections) {
  const uf = new Union_Find(n)
  let mst = 0
  connections.sort((a, b) => a[2] - b[2])
  for(const [city1, city2, cost] of connections){
    if(uf.connected(city1, city2)) continue
    uf.union(city1, city2)
    mst += cost
  }
  return uf.count() === 1 ? mst : -1
 }