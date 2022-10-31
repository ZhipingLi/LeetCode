/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
    if(!nums.length) return null
    const max = Math.max(...nums)
    const maxIdx = nums.indexOf(max)
    const leftArr = nums.slice(0,maxIdx)
    const rightArr = nums.slice(maxIdx+1)
    const left = constructMaximumBinaryTree(leftArr) //构造辅助函数传递索引和nums控制左右子数组，效率更高。（省略了数组切片操作）
    const right = constructMaximumBinaryTree(rightArr)
    const root = new TreeNode(max,undefined,undefined)
    root.left = left
    root.right = right
    return root
};

// 使用辅助函数：

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
    return build(0, nums.length - 1, nums)
  };
  
  function build(lo, hi, nums){
    if(lo > hi) return null
    let max = Number.MIN_SAFE_INTEGER
    let index = -1
    for(let i = lo; i <= hi; i++){
      if(nums[i] > max){
        max = nums[i]
        index = i
      }
    }
    const left = build(lo, index - 1, nums)
    const right = build(index + 1, hi, nums)
    return new TreeNode(max, left, right)
  }