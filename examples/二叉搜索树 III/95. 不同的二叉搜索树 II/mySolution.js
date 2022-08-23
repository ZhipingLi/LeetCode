/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
  return build(1, n)
};

function build(lo, hi){
  if(lo > hi) return [null]
  const res = []
  for(let i = lo; i <= hi; i++){
    const left = build(lo, i - 1)
    const right = build(i + 1, hi)
    for(const l of left){
      for(const r of right){
        res.push(new TreeNode(i, l, r))
      }
    }
  }
  return res
}