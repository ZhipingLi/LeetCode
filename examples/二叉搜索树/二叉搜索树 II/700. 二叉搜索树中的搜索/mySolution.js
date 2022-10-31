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
 * @param {number} val
 * @return {TreeNode}
 */
 // 普通二叉树的查找方式：
 var searchBST = function(root, val) {
  if(!root) return null
  if(root.val === val) return root
  const left = searchBST(root.left, val)
  const right = searchBST(root.right, val)
  return left ? left : right
};

 // BST的查找方式：
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
  if(!root) return null
  if(root.val === val) return root
  if(root.val > val) return searchBST(root.left, val)
  else return searchBST(root.right, val)
};