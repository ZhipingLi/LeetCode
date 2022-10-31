/**
 * 「名人」的定义：
 *  1.所有其他人都认识名人。
 *  2.名人不认识任何其他人。
 * 
 * 名流问题最优解：
 * 判断一个人是名人必须用一个 for 循环，但判断一个人不是名人只需要满足 knows(cand, other) || !knows(other, cand)
 * PS：knows(i, j)为系统提供API
 */

/**
 * @param {number} n
 * @return {number}
 */
 var findCelebrity = function(n) {
  // 假设cand是名人
  let cand = 0
  for(let other = 1; other <= n - 1; other++){
    // 假设other是名人
    if(knows(cand, other) || !knows(other, cand)) cand = other
  }
  // cand是排除的最后结果，但不能保证⼀定是名⼈
  for(let other = 0; other <= n - 1; other++){
    if(cand === other) continue
    if(knows(cand, other) || !knows(other, cand)) return -1
  }
  return cand
 }
