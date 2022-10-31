/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
  if(!root) return "#,"
  const queue = [root]
  let res = ''
  while(queue.length){
    const root = queue.shift()
    if(!root) {
      res += '#,'
      continue
    }
    res = res + root.val + ','

    queue.push(root.left)
    queue.push(root.right)
  }
  return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const arr = data.split(',')
    arr.pop()
    if(arr[0] === '#') return null
    const root = new TreeNode(arr[0])
    const queue = [root]
    // 或者使用while循环
    // let i = 1
    // while(queue.length){
    for(let i = 1; i <= arr.length - 1; ){
      const parent = queue.shift()

      const leftVal = arr[i++]
      if(leftVal === '#') {
        parent.left = null
      }else{
        const left = new TreeNode(leftVal) 
        parent.left = left
        queue.push(left)
      }

      const rightVal = arr[i++]
      if(rightVal === '#') {
        parent.right = null
      }else{
        const right = new TreeNode(rightVal) 
        parent.right = right
        queue.push(right)
      }
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */