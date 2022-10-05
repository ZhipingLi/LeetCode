/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* 小顶堆解法 */
 var findKthLargest = function(nums, k) {
  const heap = new Heap()
  // 每个元素都过一遍小顶堆
  for(let i = 0; i <= nums.length - 1; i++){
    heap.insert(nums[i])
    // 堆中元素多于 k 个时，删除堆顶元素
    if(i > k - 1) heap.pop() 
  }
  // 堆顶是最小的，即第 k 个最大元素
  return heap.peek()
};

class Heap {
  constructor(){
    this.arr = []
  }

  insert(num){
    if(!this.arr.length) {
      this.arr.push(num)
      return
    }
    let left = 0, right = this.arr.length - 1
    while(left <= right){
      const mid = left + Math.floor((right - left) / 2)
      if(this.arr[mid] > num){
        left = mid + 1
      }else{
        right = mid - 1
      }
    }
    this.arr.splice(left, 0, num)
  }

  pop(){
    return this.arr.pop()
  }

  peek(){
    return this.arr[this.arr.length - 1]
  }
}

/**
 * 快速选择算法比较巧妙，时间复杂度更低，是快速排序的简化版。
 * 快速选择算法复用了partition函数，快速定位第 k 大的元素。相当于对数组部分排序而不需要完全排序
 */
 
/* 快速选择算法解法 */
var findKthLargest = function(nums, k) {
  let lo = 0, hi = nums.length - 1
  while(lo <= hi){
    const p = partition(nums, lo, hi)
    if(p === k - 1) return nums[p]
    else if(p > k - 1) hi = p - 1
    else lo = p + 1
  }
  return -1
}
// partition函数会将 nums[p] 排到正确的位置，使得 nums[lo..p-1] <= nums[p] <= nums[p+1..hi]。
function partition(nums, lo, hi){
  if(lo === hi) return lo
  const pivot = nums[lo]
  let i = lo, j = hi + 1
  while(true){
    while(nums[++i] > pivot){
      if(i === hi) break
    }
    while(nums[--j] < pivot){
      if(j === lo) break
    }
    if(i >= j) break
    swap(nums, i, j)
  }
  swap(nums, j, lo)
  return j
}

function swap(nums, i, j){
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}