/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
/* 动态规划解法 */
 var videoStitching = function(clips, time) {
  const n = clips.length, memo = new Map()
  clips.sort((a, b) => a[0] - b[0])
  const result = dp(0, 0)
  if(result === Infinity) return -1
  return result

  // dp函数定义：使用i...n - 1视频拼成j...time的最小数目
  function dp(i, j){
    //base case
    if(j >= time) return 0
    if(i === n) return Infinity

    const key = i + ',' + j
    if(memo.has(key)) return memo.get(key)

    let res = Infinity
    const [startTime, endTime] = clips[i]
    if(startTime <= j) {
      if(endTime > j){
        res = Math.min(dp(i + 1, j), dp(i + 1, endTime) + 1)
      }else res = dp(i + 1, j)
    }
    memo.set(key, res)
    return res
  }
};

/* 贪心思想解法 */
var videoStitching = function(clips, time) {
  // 按起点升序排列，起点相同则降序排列
  clips.sort((a, b) => {
    if(a[0] === b[0]) return b[1] - a[1]
    return a[0] - b[0]
  })

  let currEnd = 0, nextEnd = 0, res = 0
  for(let i = 0; i <= clips.length - 1; i++){
    const [startTime, endTime] = clips[i]
    if(startTime > currEnd) return -1
    if(endTime <= currEnd) continue
    // 找到一个可以向后拼接的片段
    nextEnd = endTime
    // 不着急确定，贪心比较下一个片段
    while(true){
      if(i + 1 === clips.length) break
      const [candStart, candEnd] = clips[i + 1]
      if(candStart > currEnd) break
      if(candEnd >= nextEnd) nextEnd = candEnd
      i++
    }
    // 确定本次向后拼接的片段
    currEnd = nextEnd
    res++
    if(currEnd >= time) return res
  }
  return -1
}