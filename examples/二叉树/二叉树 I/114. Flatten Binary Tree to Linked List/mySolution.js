/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if(!root) return null
    const temp = root
    const left = root.left
    const right = root.right
    root.left = null
    root.right = flatten(left)
    while(root.right) root = root.right
    root.right = flatten(right)
    return temp
};