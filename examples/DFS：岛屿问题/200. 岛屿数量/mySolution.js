/**
 * 「岛屿」问题理解为矩阵外面都是海。
 * 
 * 为什么每次遇到岛屿，都要用 DFS 算法把岛屿「淹了」呢？主要是为了省事，避免维护 visited 数组：
 * DFS 函数遍历到值为 0 的位置会直接返回，所以只要把经过的位置都设置为 0，就可以起到不走回头路的作用。
 */

/* DFS解法 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  const m = grid.length, n = grid[0].length
  let res = 0
  for(let i = 0; i <= m - 1; i++){
    for(let j = 0; j <= n - 1; j++){
      if(grid[i][j] === '1') {
        // 每发现一个岛屿，岛屿数量加一
        res++
        // 然后使用 DFS 将岛屿淹了
        dfs(i, j)
      }
    }
  }
  return res

  // 从 (i, j) 开始，将与之相邻的陆地都变成海水
  function dfs(i, j){
    if(i < 0 || j < 0 || i === m || j === n) return
    // 已经是海水了
    if(grid[i][j] === '0') return
    // 将 (i, j) 变成海水
    grid[i][j] = '0'
    // 淹没上下左右的陆地
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
};

/* Union-Find解法 */
const { Union_Find } = require('../../Union-Find（并查集算法）/Union-Find')

var numIslands = function(grid) {
  const m = grid.length, n = grid[0].length
  const uf = new Union_Find(m * n)
  for(let i = 0; i <= m - 1; i++){
      for(let j = 0; j <= n - 1; j++){
        if(grid[i + 1] && grid[i + 1][j] && grid[i][j] === grid[i + 1][j]) uf.union(i * n + j, (i + 1) * n + j)
        if(grid[i - 1] && grid[i][j] === grid[i - 1][j]) uf.union(i * n + j, (i - 1) * n + j)
        if(grid[i][j] === grid[i][j + 1]) uf.union(i * n + j, i * n + j + 1)
        if(grid[i][j] === grid[i][j - 1]) uf.union(i * n + j, i * n + j - 1)
      }
  }
  // 找到所有连通分量的根
  const rootsArr = uf.parents.filter((value, index) => value === index)

  let count = 0
  rootsArr.forEach(index => {
    // 注意 index -> i 的方式
    let i = Math.floor((index + 1) / n) 
    if((index + 1) % n === 0) i-- 

    let j = index - i * n
    if(grid[i][j] === '1') count++
  })
  return count
};