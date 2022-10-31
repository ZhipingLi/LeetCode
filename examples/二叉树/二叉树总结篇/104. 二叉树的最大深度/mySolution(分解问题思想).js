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
 * @return {number}
 */
 var maxDepth = function(root) {
  if(!root) return 0
  const depth1 = maxDepth(root.left)
  const depth2 = maxDepth(root.right)
  return Math.max(depth1, depth2) + 1
};