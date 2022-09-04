/**
 * BFS算法起源于二叉树的层序遍历，其核心是利用队列这种数据结构。
 * BFS算法常见于求最值的场景，因为BFS的算法逻辑保证了算法第一次到达目标时的代价是最小的。
 * 
 * BFS和DFS搜索最短路径的最主要的区别：
 *   * BFS的空间复杂度高，时间复杂度低；
 *   * DFS的空间复杂度低，时间复杂度高。
 * 
 * 最小深（高）度是从根节点到最近叶子节点的最短路径上的节点数量。
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
 var minDepth = function(root) {
  if(!root) return 0
  let depth = 1
  const queue = [root]
  while(queue.length){
    const size = queue.length
    for(let i = 1; i <= size; i++){
      const cur = queue.shift() // 注意置于for之内
      const left = cur.left
      const right = cur.right
      if(!left && !right) return depth
      if(left) queue.push(left)
      if(right) queue.push(right)
    }
    depth++
  }
  return depth
};