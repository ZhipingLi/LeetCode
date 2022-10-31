/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b)
  const res = [], track = []
  backTrack(0)
  return res

  function backTrack(start){
    if(track.length === 4){
      if(track.reduce((prev, curr) => prev + curr) === target) res.push([...track])
      return
    }

    for(let i = start; i <= nums.length - 1; i++){
      if(i > start && nums[i] === nums[i - 1]) continue
      track.push(nums[i])
      backTrack(i + 1)
      track.pop()
    }
  }
};