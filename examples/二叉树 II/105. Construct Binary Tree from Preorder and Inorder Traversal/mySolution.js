/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null
    const root = new TreeNode(preorder[0],undefined,undefined)
    const idx = inorder.indexOf(preorder[0])
    const left = buildTree(preorder.slice(1,idx+1),inorder.slice(0,idx))
    const right = buildTree(preorder.slice(idx+1),inorder.slice(idx+1))
    root.left = left
    root.right = right
    return root
};

//构造辅助函数传递索引取代数组切片操作
var buildTree = function(preorder, inorder) {
    return build(0,preorder.length-1,0,inorder.length-1,preorder,inorder)
};
var build = function(m,n,i,j,preorder,inorder){
    if(m>n) return null
    const root = new TreeNode(preorder[m],undefined,undefined)
    let idx = i
    while(true){
        if(preorder[m] === inorder[idx]) break
        idx++
    }
    const left = build(m+1,m+idx-i,i,idx-1,preorder,inorder)
    const right = build(m+idx-i+1,n,idx+1,j,preorder,inorder)
    root.left = left
    root.right = right
    return root
}
