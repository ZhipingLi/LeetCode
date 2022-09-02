/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  const res = [], track = []
  candidates.sort()
  let trackSum = 0
  backTrack(0)
  return res

  function backTrack(start){
    if(trackSum === target) res.push([...track])
    if(trackSum > target) return
    for(let i = start; i <= candidates.length - 1; i++){
      if(i > start && candidates[i] === candidates[i - 1]) continue
      track.push(candidates[i])
      trackSum += candidates[i]
      backTrack(i + 1)
      trackSum -= candidates[i]
      track.pop()
    }
  }
};