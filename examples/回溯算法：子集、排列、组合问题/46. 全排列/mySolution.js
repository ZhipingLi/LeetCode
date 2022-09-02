/**
 * 如果题目是计算元素个数为 k 的排列而非全排列，只需修改base case即可：if (track.length === k) { ... }
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const res = [], track = [], used = []
  backTrack()
  return res

  function backTrack(){
    if(track.length === nums.length) {
      res.push([...track])
      return
    }
    for(const num of nums){
      if(used[num]) continue
      track.push(num)
      used[num] = true
      backTrack()
      track.pop()
      used[num] = false
    }
  }
};