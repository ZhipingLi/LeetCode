/**
 * 标准全排列算法之所以出现重复，是因为把相同元素形成的排列序列视为不同的序列，但实际上它们应该是相同的；
 * 而如果固定相同元素形成的序列顺序，就避免了重复。（if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) { continue }）
 * 
 * 举例：当出现重复元素时，比如输入nums = [1,2,2',2'']，2'只有在2已经被使用的情况下才会被选择，2''只有在2'已经被使用的情况下才会被选择，这就保证了相同元素在排列中的相对位置保证固定。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  const res = [], track = [], used = []
  nums.sort((a, b) => a - b)
  backTrack()
  return res

  function backTrack(){
    if(track.length === nums.length) res.push([...track])
    for(let i = 0; i <= nums.length - 1; i++){
      if(used[i]) continue
      // 固定相同的元素在排列中的相对位置
      if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
      used[i] = true
      track.push(nums[i])
      backTrack()
      used[i] = false
      track.pop()
    }
  }
};