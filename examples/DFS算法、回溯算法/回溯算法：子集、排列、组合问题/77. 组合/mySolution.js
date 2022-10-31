/**
 * 组合问题和子集问题是一样的：大小为 k 的组合就是大小为 k 的子集，或者说子集的第 k 层（根节点[]为第 0 层）。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  const res = [], track = []
  backTrack(1)
  return res

  function backTrack(start){
    // base case：收集第 k 层节点的值
    // 使用 start - 1 === k 来控制base case是错误的
    if(track.length === k) {
      res.push([...track])
      return
    }
    for(let i = start; i <= n; i++){
      track.push(i)
      backTrack(i + 1)
      track.pop()
    }
  }
};