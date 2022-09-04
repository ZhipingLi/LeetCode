/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 var openLock = function(deadends, target) {
  if(deadends.includes('0000')) return -1
  const deadMap = new Set(deadends)
  const visited = [], queue = ['0000']
  let depth = 0
  while(queue.length){
    const size = queue.length
    for(let i = 1; i <= size; i++){
      const cur = queue.shift()
      if(cur === target) return depth
      for(let j = 0; j <= 3; j++){
        const pulsOneStr = pulsOne(cur, j)  
        if(deadMap.has(pulsOneStr) || visited[pulsOneStr]) continue
        queue.push(pulsOneStr)
        visited[pulsOneStr] = true
      }
      for(let j = 0; j <= 3; j++){
        const minusOneStr = minusOne(cur, j)
        if(deadMap.has(minusOneStr) || visited[minusOneStr]) continue
        queue.push(minusOneStr)
        visited[minusOneStr] = true
      }
    }
    depth++
  }
  return -1
};

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
