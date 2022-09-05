/**
 * BFS算法并不只是一个寻路算法，而且也是一种暴力搜索算法
 */

/**
 * @param {number[][]} board
 * @return {number}
 */
 var slidingPuzzle = function(board) {
  const start = board.flat(), startStr = start.join('')
  const neighborIndex = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4]
  ]
  const queue = [startStr], visited = []
  visited[startStr] = true
  let step = 0
  while(queue.length){
    const size = queue.length
    for(let i = 0; i <= size - 1; i++){
      const cur = queue.shift() // 注意：切勿使用pop()
      if(cur === '123450') return step
      const nextArr = getPaths(cur, neighborIndex)
      for(const next of nextArr){
        if(visited[next]) continue
        queue.push(next)
        visited[next] = true
      }
    }
    step++
  }
  return -1
};

function getPaths(str, neighborIndex){
  const index_0 = str.indexOf('0')
  const arr = str.split(''), res = []
  for(const idx of neighborIndex[index_0]){
    res.push(swap(index_0, idx, arr).join(''))
  }
  return res
}

function swap(i, j, orgin){
  const arr = [...orgin]
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}