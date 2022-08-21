/**
 * 二叉树题目的递归解法可以分两类思路:
 * 第一类是遍历一遍二叉树得出答案 -> **回溯算法核心框架**
 * 第二类是通过分解问题计算出答案 -> **动态规划核心框架**
 * 
 * 遍历思想需要辅助函数(外部存在保存记录的变量), 而分解问题思想不需要.
 * 如果全局变量是基本数据类型, 建议将辅助函数定义在主函数内部;
 * 如果全局变量是引用数据类型, 建议将辅助函数定义在主函数外部.
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
 var maxDepth = function(root) {
  let depth = 0, max = 0
  function traverse(root){
    if(!root) {
      max = Math.max(max, depth)
      return
    }
    depth++
    traverse(root.left)
    traverse(root.right)
    depth--
  }
  traverse(root)
  return max
};