/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

 /* 数字角度 */
 var canPartitionKSubsets = function(nums, k) {
  const total = nums.reduce((prev, cur) => prev + cur)
  if(total % k !== 0) return false
  // 对nums进行降序排序，更容易触发剪枝
  nums.sort((a, b) => b - a)
  const target = total / k
  let index = 0
  const buckets = new Array(k).fill(0)
  return backTrack()
  
  function backTrack(){
    if(index === nums.length) {
      for(let i = 0; i <= buckets.length - 1; i++){
        if(buckets[i] !== target) return false
      }
      return true
    }
    const num = nums[index]
    for(let i = 0; i <= buckets.length - 1; i++){
      // 剪枝
      if(buckets[i] + num > target) continue
      index++
      buckets[i] += num
      if(backTrack()) return true
      buckets[i] -= num
      index--
    }
    return false
  }
};

/**
 * 时间复杂度（假设nums中的元素个数为 n）：
 * 从数字的角度进行穷举：n个数字，每个数字有k个桶可供选择，所以组合出的结果个数为k^n，时间复杂度为O(k^n)。
 * 从桶的角度进行穷举：每个桶要遍历n个数字，选择装入或不装入，组合的结果有2^n种；所以k个桶的总的时间复杂度为O(k*2^n)。
 */

 /* 桶角度 */
 var canPartitionKSubsets = function(nums, k) {
  const total = nums.reduce((prev, cur) => prev + cur)
  if(total % k !== 0) return false
  const target = total / k
  const used = []
  return backTrack(0, 0, 1)

  // 回溯算法用尽量使用函数参数，以便维护backTrack()前后（「做选择」和「撤销选择」）的环境数据
  function backTrack(index, bucket, i){
    if(i === k + 1) return true
    if(bucket === target) return backTrack(0, 0, i + 1)
    for(; index <= nums.length - 1; index++){
      if(used[index]) continue
      if(nums[index] + bucket > target) continue
      used[index] = true
      bucket += nums[index]
      if(backTrack(index + 1, bucket, i)) return true
      used[index] = false
      bucket -= nums[index]
    }
    return false
  }
};
