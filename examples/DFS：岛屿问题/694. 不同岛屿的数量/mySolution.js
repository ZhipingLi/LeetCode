/**
 * @param {number[][]} grid
 * @return {number}
 */
 var numDistinctIslands = function(grid) {
  const set = new Set()
  const m = grid.length, n = grid[0].length
  for(let i = 0; i <= m - 1; i++){
    for(let j = 0; j <= n - 1; j++){
      if(grid[i][j] === 1) set.add(dfs(i, j))
    }
  }
  return set.size

  function dfs(i, j){
    if(i < 0 || j < 0 || i === m || j === n) return '#;'
    if(grid[i][j] === 0) return '#;'
    grid[i][j] = 0
    const top = dfs(i - 1, j)
    const left = dfs(i, j - 1)
    const right = dfs(i, j + 1)
    const bottom = dfs(i + 1, j)
    return top + left + right + bottom + '$'
  }
 }