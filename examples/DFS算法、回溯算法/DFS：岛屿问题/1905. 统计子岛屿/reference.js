/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
 var countSubIslands = function(grid1, grid2) {
  const m = grid2.length, n = grid2[0].length

  for(let i = 0; i <= m - 1; i ++){
    for(let j = 0; j <= n - 1; j ++){
      // 这个陆地在 grid1 中不是陆地，淹掉
      if(grid2[i][j] === 1 && grid1[i][j] === 0) dfs(i, j)
    }
  }
  let count = 0
  // 现在 grid2 中剩下的岛屿都是子岛，计算岛屿数量
  for(let i = 0; i <= m - 1; i++){
    for(let j = 0; j <= n - 1; j++){
      if(grid2[i][j] === 1) {
        count++
        dfs(i, j)
      }
    }
  }
  return count

  function dfs(i ,j){
    if(i < 0 || j < 0 || i === m || j === n) return
    if(grid2[i][j] === 0) return
    grid2[i][j] = 0
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
};