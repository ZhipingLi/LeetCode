/**
 * @param {number[][]} grid
 * @return {number}
 */
 var numEnclaves = function(grid) {
  const m = grid.length, n = grid[0].length
  for(let i = 0; i <= m - 1; i++){
    dfs(i, 0)
    dfs(i, n - 1)
  }
  for(let j = 0; j <= n - 1; j++){
    dfs(0, j)
    dfs(m - 1, j)
  }
  let count = 0
  grid.forEach(arr => {
    arr.forEach(item => {
      if(item === 1) count++
    })
  })
  return count

  function dfs(i, j){
    if(i < 0 || j < 0 || i === m || j === n) return
    if(grid[i][j] === 0) return
    grid[i][j] = 0
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
};