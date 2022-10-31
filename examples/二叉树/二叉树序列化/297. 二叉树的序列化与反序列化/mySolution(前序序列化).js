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
  /**
   * 捕获阶段执行代码
   */
  const left = serialize(root.left)
  const right = serialize(root.right)
  /**
   * 冒泡阶段执行代码
   */
  
  // 1. 此处先返回root.val, 接着返回左子树和右子树, 故返回的顺序为前序遍历顺序.
  // 2. left和right中已经包含了',', 故不需要再加','.
  return root.val + ',' + left + right 
};

/**
 * PS:
 * 1. ⼀般语境下，单单前序遍历结果是不能还原二叉树结构的，因为缺少空指针的信息，至少要得前、中、后序遍历中的两种才能还原⼆叉树。
 * 但是这里的data参数包含空指针的信息，所以只使用data参数就可以还原二叉树。(反序列化前序/后序数据)
 * 2. 仅有中序遍历结果是不能反序列化的. 因为前序/后序数据中, 头结点就是首/尾元素, 而在中序数据中, 头结点在中间, 无法确定具体的索引位置.
 */

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const arr = data.split(',')
    // 反序列化前序顺序数据时可省: 最后一个'#'会返回null, 最后的''不会被遍历到.
    // 反序列化后序顺序数据时不可省: 反序列化后序顺序数据会从后往前找头结点.
    arr.pop()
    return buildDeserializaiton(arr)
};

function buildDeserializaiton(arr){
  // 处理第一次传入的arr为空的情况, 但本题不会出现这样的情况, 可省.
  if(!arr.length) return null

  const rootVal = arr.shift()
  if(rootVal === '#') return null

  // 在本题中, TreeNode的构造函数function TreeNode(val);只接受一个参数, 所以该行代码不能放在冒泡阶段执行.
  const root = new TreeNode(rootVal)

  // 此处左子树和右子树的遍历顺序不能交换: 左子树遍历完后, arr中剩下的元素刚好就是右子树的节点数据了.
  root.left = buildDeserializaiton(arr)
  root.right = buildDeserializaiton(arr)
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */