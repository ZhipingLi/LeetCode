/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 前序遍历位置方案
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
  return traverse(root, -Infinity, Infinity)
};

function traverse(root, min, max){
  if(!root) return true
  if(root.val >= max || root.val <= min) return false
  return traverse(root.left, min, root.val) && traverse(root.right, root.val, max)
}


// 后序遍历位置方案：该方案可收集子BST信息（如：子BST节点和）
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
  function traverse(root){
    if(!root) return [true, Infinity, -Infinity, 0]
    const left = traverse(root.left)
    const right = traverse(root.right)
    if(left[0] && right[0] && left[2] < root.val && right[1] > root.val){
      const res = [true]
      res.push(Math.min(root.val, left[1]))
      res.push(Math.max(root.val, right[2]))
      res.push(root.val + left[3] + right[3])
      return res
    }else{
      return [false]
    }
  }
  return traverse(root)[0]
};