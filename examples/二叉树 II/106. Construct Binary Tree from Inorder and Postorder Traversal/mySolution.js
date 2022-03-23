/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    if(!inorder.length) return null
    const root = new TreeNode(postorder[postorder.length-1])
    const idx = inorder.indexOf(postorder[postorder.length-1])
    const left = buildTree(inorder.slice(0,idx),postorder.slice(0,idx))
    const right = buildTree(inorder.slice(idx+1),postorder.slice(idx,postorder.length-1))
    root.left = left
    root.right = right
    return root
};