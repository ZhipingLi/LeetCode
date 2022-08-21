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
  if(!root) return '#,'
  const left = serialize(root.left)
  const right = serialize(root.right)
  return left + right + root.val + ','
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  const arr = data.split(',')
  // 不可省: 反序列化后序顺序数据会从后往前找头结点.
  arr.pop()
  return buildDeserialization(arr)
};

function buildDeserialization(arr){
  // 处理第一次传入的arr为空的情况, 但本题不会出现这样的情况, 可省.
  if(!arr.length) return null
  const rootVal = arr.pop()
  if(rootVal === '#') return null
  // 注意：右子树在前, 左子树在后.
  const right = buildDeserialization(arr)
  const left = buildDeserialization(arr)
  const root = new TreeNode(rootVal)
  root.left = left
  root.right = right
  return root
}

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/