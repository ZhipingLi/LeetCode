/**
 * 「封闭岛屿」问题理解为矩阵外面都是陆地。
 * 
 * 「封闭岛屿」的判断：提前把靠边的岛屿都淹掉后，剩下的岛屿就是「封闭岛屿」了。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var closedIsland = function(grid) {
  const m = grid.length, n = grid[0].length
  // 淹掉靠左、右边的岛屿
  for(let i = 0; i <= m - 1; i++){
    dfs(i, 0)
    dfs(i, n - 1)
  }
  // 淹掉靠上、下边的岛屿
  for(let j = 0; j <= n - 1; j++){
    dfs(0, j)
    dfs(m - 1, j)
  }
  let res = 0
  for(let i = 0; i <= m - 1; i++){
      for(let j = 0; j <= n - 1; j++){
        if(grid[i][j] === 0) {
          res++
          dfs(i, j)
        }
      }
  }
  return res

  function dfs(i ,j){
    if(i < 0 || j < 0 || i === m || j === n) return
    if(grid[i][j] === 1) return
    grid[i][j] = 1
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
};

/**
 * Union-Find思路：
 * 1. 将四周一圈视为一个外连通分量。
 * 2. 将四周一圈中任何一个单元格连接的水域/陆地都同外连通分量连通起来。
 * 3. 再将外连通分量中的所有的内嵌水域同外连通分量连通起来。
 * 3. 剩下的则都是外连通分量内嵌的「封闭岛屿」了，但此时需要将各个「封闭岛屿」内的陆地连通为一个分量。
 * 4. 「封闭岛屿」的数量 = 总连通分量数 - 1
 */