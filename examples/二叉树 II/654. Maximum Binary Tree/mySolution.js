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