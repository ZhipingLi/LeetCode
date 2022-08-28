const {Union_Find} = require('../../Union-Find（并查集算法）/Union-Find')

/**
 * @param {number[][]} points
 * @return {number}
 */
 var minCostConnectPoints = function(points) {
  const arr = []
  let mst = 0
  for(let i = 0; i <= points.length - 1; i++){
    const p1 = points[i]
    for(let j = i + 1; j <= points.length - 1; j++){
      const p2 = points[j]
      arr.push([i, j, Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])])
    }
  }
  arr.sort((a, b) => a[2] - b[2])
  const uf = new Union_Find(arr.length)
  for(const [u, v, weight] of arr){
    if(uf.connected(u, v)) continue
    uf.union(u, v)
    mst += weight
  }
  return mst
};
