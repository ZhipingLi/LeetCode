/**
 * 如果岛屿 B 中存在一片陆地，在岛屿 A 的对应位置是海水，那么岛屿 B 就不是岛屿 A 的子岛屿。
 */

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
 var countSubIslands = function(grid1, grid2) {
  const m = grid2.length, n = grid2[0].length
  let count = 0
  for(let i = 0; i <= m - 1; i ++){
    for(let j = 0; j <= n - 1; j ++){
      if(grid2[i][j] === 1) {
        if(dfs(i, j)) count++
      }
    }
  }
  return count

  function dfs(i, j){
    if(i < 0 || j < 0 || i === m || j === n) return true
    if(grid2[i][j] === 0) return true
    grid2[i][j] = 0
    const top = dfs(i + 1, j)
    const bottom = dfs(i - 1, j)
    const left = dfs(i, j - 1)
    const right = dfs(i, j + 1)
    return grid1[i][j] === 1 && top && bottom && left && right
  }
};