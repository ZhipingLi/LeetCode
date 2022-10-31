/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
 var splitArray = function(nums, m) {
  const f = limit => { //自变量：所求最大值、最小值  因变量：约束条件(target)
      let count = 1
      let total = 0
      for(const num of nums){
          if(total + num <= limit){
              total += num
          }else{
              count++
              total = num //更新total = 0 + num
          }
      }
      return count
  }
  let left = Math.max(...nums), right = nums.reduce((x,y) => x+y) // Math.max(...arr)参数不为数组，需解构
  while(left <= right){
      let mid = left + Math.floor((right - left) / 2) // 置于while循环中
      if(m >= f(mid)){
          right = mid - 1
      }else{
          left = mid + 1
      }
  }
  return left
};