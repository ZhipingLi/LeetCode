/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  const res = [], track = []
  backTrack(0)
  return res

  function backTrack(start){
    res.push([...track])
    for(let i = start; i <= nums.length - 1; i++){
      track.push(nums[i])
      backTrack(i + 1)
      track.pop()
    }  
  }
};

