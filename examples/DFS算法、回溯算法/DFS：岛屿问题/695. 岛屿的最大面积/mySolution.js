/**
 * @param {number[][]} grid
 * @return {number}
 */
/* count也可以作为dfs()的返回值来求得 */
 var maxAreaOfIsland = function(grid) {
  const m = grid.length, n = grid[0].length
  let count = 0, res = 0
  for(let i = 0; i <= m - 1; i++){
    for(let j = 0; j <= n - 1; j++){
      if(grid[i][j] === 1) {
        dfs(i, j)
        res = Math.max(count, res)
        count = 0
      }
    }
  }
  return res
  
  function dfs(i ,j){
    if(i < 0 || j < 0 || i === m || j === n) return
    if(grid[i][j] === 0) return
    grid[i][j] = 0
    count++
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
};