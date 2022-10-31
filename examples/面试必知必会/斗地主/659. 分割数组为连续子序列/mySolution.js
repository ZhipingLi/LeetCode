/**
 * 本题若使用回溯算法进行集合划分，时间复杂度过高。
 * 
 * 技巧：
 * freq 哈希表记录每个元素在nums中还剩的个数，用于判断一个元素能否作为开头新建一个子序列。
 * need 哈希表记录每个元素被已存在的子序列所需要的个数，用于判断一个元素能否被接到其他子序列后。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isPossible = function(nums) {
  const freq = new Map(), need = new Map()
  nums.forEach(num => freq.set(num, (freq.get(num) || 0) + 1))
  for(const num of nums){
    // 已经被用到其他子序列中了
    if(!freq.get(num)) continue
    // 判断是否能接到其他子序列后
    if(need.get(num)){
      updateNeed(need, num, false)
      updateNeed(need, num + 1, true)
      updateFreq(freq, num, false)
    }else if(freq.get(num + 1) && freq.get(num + 2)){ // 新建子序列
      // 将 num 作为开头，新建一个长度为 3 的子序列 [num, num + 1, num + 2]
      updateNeed(need, num + 3, true)
      updateFreq(freq, num, false)
      updateFreq(freq, num + 1, false)
      updateFreq(freq, num + 2, false)
    }else return false // 两种情况都不符合，则无法分配
  }
  return true
};

function updateFreq(freq, num, plus){
  if(plus) freq.set(num, freq.get(num) + 1)
  else freq.set(num, freq.get(num) - 1)
}

function updateNeed(need, num, plus){
  if(plus) need.set(num, (need.get(num) || 0) + 1)
  else need.set(num, need.get(num) - 1)
}