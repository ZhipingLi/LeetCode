/* 左右指针解法（基于双数之和）*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const res = []
  let i = 0
  while(i <= nums.length - 1){
    const newNums = nums.slice(i + 1)
    const target = 0 - nums[i]
    for(const subRes of twoSum(newNums, target)){
      res.push([nums[i], ...subRes])
    }
    while(nums[i] === nums[i + 1]) i++
    i++
  }
  return res
};

function twoSum(nums, target){
  // nums.sort((a, b) => a - b) // threeSum()已排序，可省
  const res = []
  let left = 0, right = nums.length - 1
  while(left < right){
    const leftVal = nums[left], rightVal = nums[right]
    const sum = leftVal + rightVal
    if(sum === target){
      res.push([leftVal, rightVal])
      while(left < right && nums[left] === leftVal) left++
      while(left < right && nums[right] === rightVal) right--
    }else if(sum < target) left++
    else right--
  }
  return res
}

/* 回溯解法 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const res = [], track = []
  backTrack(0)
  return res

  function backTrack(start){
    if(track.length === 3){
      if(track.reduce((prev, curr) => prev + curr) === 0) res.push([...track])
      return
    }

    for(let i = start; i <= nums.length - 1; i++){
      if(i > start && nums[i] === nums[i - 1]) continue
      track.push(nums[i])
      backTrack(i + 1)
      track.pop()
    }
  }
}