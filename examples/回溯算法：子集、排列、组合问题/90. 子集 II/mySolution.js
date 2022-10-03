/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  const res = [], track = []
  // 先排序，让相同的元素靠在一起
  nums.sort((a, b) => a - b)
  backTrack(0)
  return res

  function backTrack(start){
    res.push([...track])
    for(let i = start; i <= nums.length - 1; i++){
      // 剪枝逻辑：值相同的相邻树枝，只遍历第一条
      // （i === start && nums[i] === nums[i - 1]）为[2] -> [2,2]的情况，该情况是不是相邻树枝，而是一条树枝上的父子关系，不应剪掉。
      if(i > start && nums[i] === nums[i - 1]) continue
      track.push(nums[i])
      backTrack(i + 1)
      track.pop()
    }
  }
};