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
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
    //map和res放在函数外会成为全局变量，导致每一次运行findDuplicateSubtrees(root)时，map和res不会被重新创建
    const map = new Map()
    const res = []
    postTranverse(root)
    function postTranverse(root){
        if(!root) return '#'
        const left = postTranverse(root.left)
        const right = postTranverse(root.right)
        const str = left+','+right+','+root.val
        if(!map.has(str)) map.set(str,1)
        else map.set(str,map.get(str)+1)
        if(map.get(str) === 2) res.push(root)
        return str
    }
    return res
};