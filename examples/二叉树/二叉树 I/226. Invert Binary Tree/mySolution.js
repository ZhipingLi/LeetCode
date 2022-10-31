/**
 * 如果把交换左右⼦节点的代码复制粘贴到后序遍历的位置也是可以的，但是直接放到中序遍历的位置是不行的。
 * 快速排序就是个⼆叉树的前序遍历，归并排序就是个⼆叉树的后序遍历。
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
 * @return {TreeNode}
 */

 var invertTree = function(root) {
    if(!root) return null
    /**** 前序遍历位置 ****/
    const temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    /**** 中序遍历位置 ****/
    invertTree(root.right)
    /**** 后序遍历位置 ****/
    return root
};