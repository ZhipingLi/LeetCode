/**
 * 本题的关键在于: 每一条二叉树的直径长度, 就是一个节点的左右子树的最大深度之和.
 * 
 * 本题中, 应考虑遍历思想而非分解问题思想. 因为直径可能出现在中间节点而非根节点.
 * 如果使用分解问题思想, 将直径(某个中间节点产生)继续向上汇报, 那么就会高判直径.
 */

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
 var diameterOfBinaryTree = function(root) {
  let max = 0
  function traverse(root){
    if(!root) return 0
    const left = traverse(root.left)
    const right = traverse(root.right)
    const depth = Math.max(left, right) + 1
    const count = left + right
    if(count > max) max = count
    return depth
  }
  traverse(root)
  return max
};

