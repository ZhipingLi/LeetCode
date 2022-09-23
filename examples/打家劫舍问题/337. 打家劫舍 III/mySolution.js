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
 var rob = function(root) {
  const memo = new Map()
  return dp(root)

  // dp函数定义：dp(root)返回以root为根节点的树所能被盗取的最高金额。
  function dp(root){
    //base case
    if(!root) return 0

    if(memo.has(root)) return memo.get(root)

    let res = 0
    let left = 0, right = 0, leftL = 0, leftR = 0, rightL = 0, rightR = 0
    if(root.left) {
      left = dp(root.left)
      if(root.left.left) leftL = dp(root.left.left)
      if(root.left.right) leftR = dp(root.left.right)
    }
    if(root.right){
      right = dp(root.right)
      if(root.right.left) rightL = dp(root.right.left)
      if(root.right.right) rightR = dp(root.right.right)
    }
    res = Math.max(
      leftL + leftR + rightL + rightR + root.val,
      left + right
    )
    memo.set(root, res)
    return res
  }
};
