/**
 * 要求：时间复杂度O(N), 空间复杂度O(1)
 * 
 * 处理数组O(1)空间复杂度问题，关键点在于元素和索引是成对出现的，常用的方法有排序、异或、映射。
 * 
 * 异或：一个数和它本身做异或运算结果为 0，一个数和 0 做异或运算运算结果为它本身。
 * 而且异或运算满足交换律和结合律，也就是说：2 ^ 3 ^ 2 = 3 ^ (2 ^ 2) = 3 ^ 0 = 3
 * 
 * 思路：
 * 1. 确定索引和值之间的一一对应关系，如本题中 index = value - 1
 * 2. 遍历数组，按索引和值之间的关系调整元素位置，如 nums[index] = value = index + 1
 * 3. 遍历完成后，会有两个元素对应到同一个索引（重复），而且会有⼀个索引没有元素对应（缺失）。
 */
 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
  let dupIndex = -1, dup = -1
  for(let i = 0; i <= nums.length - 1; ){
    if(nums[i] === true){
      i++
      continue
    }
    const index = nums[i] - 1
    const temp = nums[index]
    if(temp === true){
      dup = nums[i] // 重复元素的值
      dupIndex = i // 缺失元素的索引
      i++
      continue
    }
    nums[i] = temp
    nums[index] = true
  }
  return [dup, dupIndex + 1]
};