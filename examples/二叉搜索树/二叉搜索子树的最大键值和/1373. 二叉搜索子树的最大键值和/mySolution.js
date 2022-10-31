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
 // 按照BST的定义，任何⼀个单独的叶子节点都是BST.
 // 此题要求在结果为负数时返回0.
 var maxSumBST = function(root) {
  let max = 0
  function traverse(root){
    // Number.MIN_VALUE属性表示JavaScript中所能表示的最小的正值, 小数。
    // Number.MIN_SAFE_INTEGER表示JavaScript中最小的安全的**integer型**数字, 整数。
    // Infinity是全局对象(global object)的一个属性, 即它是一个全局变量. Infinity的初始值是Number.POSITIVE_INFINITY. Infinity(正无穷大)大于任何值。
    // Number.NEGATIVE_INFINITY属性表示负无穷大, 与全局对象的Infinity属性的负值相同。
    if(!root) return [true, Infinity, -Infinity, 0]
    const left = traverse(root.left)
    const right = traverse(root.right)
    const res = []
    // traverse(root) 返回一个数组, 我们暂且称它为arr, 其中：
    // arr[0]记录以root为根的二叉树是否是BST;
    // arr[1]记录以root为根的二叉树所有节点中的最⼩值;
    // arr[2]记录以root为根的二叉树所有节点中的最⼤值;
    // arr[3]记录以root为根的二叉树所有节点值之和.
    if(left[0] && right[0] && root.val > left[2] && root.val < right[1]){
      res.push(true)
      res.push(Math.min(root.val, left[1])) //兼容左子树为null的情况
      res.push(Math.max(root.val, right[2])) //兼容右子树为null的情况
      const total = left[3] + right[3] + root.val
      res.push(total)
      if(max < total) max = total
    }else{
      res.push(false)
    }
    return res
  }
  traverse(root)
  return max
};