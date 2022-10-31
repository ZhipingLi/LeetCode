/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 该解法每次调用都会遍历一次二叉树，最坏的时间复杂度为O(N)。
 * 如果每个节点都能记录自己是第几大的节点，那么就可以设计出时间复杂度为O(logN)的select(int k)。
 * 如何让每一个节点都知道自己的排名呢？只需要让TreeNode中包含size属性（从根节点开始，每个节点node都可以通过node.left推导出node的排名）。
 * 
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  let res = 0, count = 0
  function traverse(root){
    if(res) return
    if(!root) return 
    traverse(root.left)
    if(++count === k){
      res = root.val
      return
    }
    traverse(root.right)
  }
  traverse(root)
  return res
};