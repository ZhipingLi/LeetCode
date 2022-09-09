/**
 * 最长递增子序列和一种叫做patience game的纸牌游戏有关，甚至有一种排序方法就叫做 patience sorting（耐心排序）。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/* 二分查找+耐心排序解法 时间复杂度：O(NlogN)*/
 var lengthOfLIS = function(nums) {
  // 牌堆
  let pilesTop = [nums[0]]
  for(let i = 1; i <= nums.length - 1; i++) {
    const num = nums[i]
    let left = 0, right = pilesTop.length - 1
    // 搜索左侧边界
    while(left <= right){
      const mid = left + Math.floor((right - left) / 2)
      if(pilesTop[mid] < num){ //
        left = mid + 1
      }else{
        right = mid - 1
      }
    }
    // 当前元素比所有的元素都大 -> 没有找到合适的牌堆，新建一堆
    if(left === pilesTop.length) pilesTop.push(num)
    // 把这张牌放到牌堆顶
    pilesTop[left] = num
  }
  // 牌堆数就是LIS的长度
  return pilesTop.length
}

