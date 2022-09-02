/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  const res = [], track = []
  let trackSum = 0
  backTrack(0)
  return res

  function backTrack(start){
    if(trackSum === target) {
      res.push([...track])
      return
    }
    if(trackSum > target) return
    for(let i = start; i <= candidates.length - 1; i++){
      track.push(candidates[i])
      trackSum += candidates[i]
      backTrack(i)
      trackSum -= candidates[i]
      track.pop()
    }
  }
};