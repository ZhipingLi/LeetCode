/**
 * 快速排序的过程就是构造一个二叉搜索树的过程。
 * 
 * 快速排序存在极端情况，需要引入随机性。
 * 常见的方式是在进行排序之前对整个数组执行洗牌算法进行打乱，或者在partition函数中随机选择数组元素作为分界点。
 * 
 * 快速排序是「不稳定排序」，归并排序是「稳定排序」。
 * 
 * 快速排序：先将一个元素排好序，然后再将剩下的元素排好序
 * 归并排序：先把左半边数组排好序，再把右半边数组排好序，然后把两半数组合并。
 */

function quickSort(nums, lo, hi) {
  if(lo >= hi) return
  // 通过交换元素构建分界点索引 p
  const p = partition(nums, lo, hi)
  // 现在 nums[lo..p-1] 都小于等于 nums[p]，且 nums[p+1..hi] 都大于等于 nums[p]
  quickSort(nums, lo, p - 1)
  quickSort(nums, p + 1, hi)
}

function partition(nums, lo, hi) {
  if(lo === hi) return lo
  // 将 nums[lo] 作为默认分界点 pivot
  const pivot = nums[lo]
  // j = hi + 1 因为 while 中会先执行 --
  let i = lo, j = hi + 1
  while(true){
    // 保证 nums[lo..i - 1] 都小于 pivot
    while(nums[++i] < pivot) {
      if(i === hi) break
    }
    // 保证 nums[j + 1..hi] 都大于 pivot
    while(nums[--j] > pivot) {
      if(j === lo) break
    }
    if(i >= j) break
    // 如果走到这里，一定有：
    // nums[i] >= pivot && nums[j] <= pivot
    // 所以需要交换 nums[i] 和 nums[j]，
    // 保证 nums[lo..i] <= pivot <= nums[j..hi]
    swap(nums, i, j)
  }
  // 将 pivot 值交换到正确的位置
  swap(nums, lo, j)
  return j
}

function swap(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}