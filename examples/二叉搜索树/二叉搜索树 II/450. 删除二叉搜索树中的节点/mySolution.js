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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
  if(!root) return null
  if(root.val === key){
    // 以下两个if可以把root只有一个或两个空子节点的情况都处理掉
    if(!root.left) return root.right
    if(!root.right) return root.left
    const candidateNode = getMin(root.right)
    root.right = deleteNode(root.right, candidateNode.val)
    candidateNode.left = root.left
    candidateNode.right = root.right
    return candidateNode

    // 或者通过if + else if + else处理
    // if(root.left && root.right){
    //   const candidateNode = getMin(root.right)
    //   root.right = deleteNode(root.right, candidateNode.val)
    //   candidateNode.left = root.left
    //   candidateNode.right = root.right
    //   return candidateNode
    // }else if(root.left){ 
    //   return root.left
    // }else if(root.right){
    //   return root.right
    // }else{
    //   return null
    // }
  }else if(root.val > key){
    root.left = deleteNode(root.left, key)
  }else{
    root.right = deleteNode(root.right, key)
  }
  return root
};

function getMin(root){
  while(root.left){
    root = root.left
  }
  return root
}