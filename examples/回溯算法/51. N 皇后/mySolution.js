/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  const track = [], res = []
  let i = 1
  backtrack()
  return res

  function backtrack(){
    if(n === 1) { // 题意要求n = 1时，输出[["Q"]]
      res.push(["Q"])
      return
    }
    if(i === n + 1){
      res.push(track.map(item => 'Q'.padStart(item, '.').padEnd(n, '.')))
      return
    }
    for(let j = 1; j <= n; j++){
      // 处理同一列
      if(track.includes(j)) continue
      let flag = false
      for(let index in track){
        const x = Number(index) + 1
        const y = track[Number(index)]
        if(Math.abs(y - j) === Math.abs(x - i)) {
          flag = true
          break
        }
      }
      // 处理同一斜线
      if(flag) continue
      track.push(j)
      i++
      backtrack()
      track.pop()
      i--
    }
  }
};