/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  const res = [], track = [], used = []
  nums.sort()
  backTrack()
  return res

  function backTrack(){
    if(track.length === nums.length) res.push([...track])
    for(let i = 0; i <= nums.length - 1; i++){
      if(used[i]) continue
      if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
      used[i] = true
      track.push(nums[i])
      backTrack()
      used[i] = false
      track.pop()
    }
  }
};