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

 // 构造辅助函数：

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
    return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)
  };
  
  function build(inorder, inStart, inEnd, postorder, postStart, postEnd){
    if(inStart > inEnd) return null
    const rootVal = postorder[postEnd]
    let i = inStart, index = -1
    while(i <= inEnd){
      if(inorder[i] === rootVal) {
        index = i
        break
      }
      i++
    }
    const leftSize = index - 1 - inStart
    const left = build(inorder, inStart, index - 1, postorder, postStart, postStart + leftSize )
    const right = build(inorder, index + 1, inEnd, postorder,  postStart + leftSize + 1, postEnd - 1)
    const root = new TreeNode(rootVal, left, right)
    return root
  }