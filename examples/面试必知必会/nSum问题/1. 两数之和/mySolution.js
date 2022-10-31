/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const arr = nums.map((item, index) => [item, index])
  arr.sort((a, b) => a[0] - b[0])
  let left = 0, right = nums.length - 1
  while(left < right){
    const sum = arr[left][0] + arr[right][0]
    if(sum === target){
      return [arr[left][1], arr[right][1]]
    }else if(sum > target){
      right--
    }else{
      left++
    }
  }
};

/**
 * 拓展：nums中可能有多对元素之和都等于target，返回所有和为target的元素对，其中不能出现重复。
 */
 var twoSum2 = function(nums, target) {
  const res = []
  nums.sort((a, b) => a - b)
  let left = 0, right = nums.length - 1
  while(left < right){
    const leftVal = nums[left], rightVal = nums[right]
    const sum = leftVal + rightVal
    if(sum === target){
      res.push([leftVal, rightVal])
      while(left < right && nums[left] === leftVal) left++
      while(left < right && nums[right] === rightVal) right--
    }else if (sum > target) right--
    else left++
  }
  return res
 }