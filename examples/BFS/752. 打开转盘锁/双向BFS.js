/**
 * 双向BFS：
 * 传统的BFS框架就是从起点开始向四周扩散，遇到终点时停止；而双向 BFS 则是从起点和终点同时开始扩散，当两边有交集的时候停止。
 * 不过，双向BFS有使用前提：需要知道终点在哪里
 * 
 * 双向BFS不再使用队列，而是使用HashSet方便快速判断两个集合是否有交集（如果有交集，则表明起点和终点是连通的）。
 */
 
 /**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
/* 双向BFS解法 */
var openLock = function(deadends, target) {
  if(deadends.includes('0000')) return -1
  let depth = 0
  let set1 = new Set(['0000']), set2 = new Set([target]) // set2为下一步要扩散的一层
  const visited = [], deadMap = new Set(deadends)
  while(set1.size && set2.size){ // 如果其中一个set走不动了，说明起点和终点不连通
    // Set遍历具有时序性
    const temp = new Set()
    for(const cur of set1){
      /* 判断是否到达终点 */
      if(set2.has(cur)) return depth
      visited[cur] = true // 注意：双向BFS中，visited不能放在for内
      for(let i = 0; i <= 3; i++){
        const pulsOneStr = pulsOne(cur, i)
        if(deadMap.has(pulsOneStr) || visited[pulsOneStr]) continue
        temp.add(pulsOneStr)
      }
      for(let i = 0; i <= 3; i++){
        const minusOneStr = minusOne(cur, i)
        if(deadMap.has(minusOneStr) || visited[minusOneStr]) continue
        temp.add(minusOneStr)
      }
    }
    depth++
    // 交换set1、set2，轮流扩散
    set1 = set2
    set2 = temp
  }
  return -1
}

function pulsOne(str, index){
  const arr = str.split('')
  if(arr[index] === '9') arr[index] = '0'
  else arr[index] = Number(arr[index]) + 1
  return arr.join('')
}

function minusOne(str, index){
  const arr = str.split('')
  if(arr[index] === '0') arr[index] = '9'
  else arr[index] = Number(arr[index]) - 1
  return arr.join('')
}