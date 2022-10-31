/**
 * 回溯算法就是DFS算法，本质上是一种暴力穷举算法。
 * 
 * 解决回溯问题，实际上就是决策树的遍历过程，需要考虑：
 * 1. 路径：已经做出的选择。
 * 2. 选择列表：你当前可以做的选择。
 * 3. 结束条件：到达决策树底层，无法再做选择的条件。
 * 
 * result = []
 * def backtrack(路径, 选择列表):
 *     if 满足结束条件:
 *         result.add(路径)
 *         return
 *     for 选择 in 选择列表:
 *         做选择
 *         backtrack(路径, 选择列表)
 *         撤销选择
 * 
 * 其核心就是 for 循环里面的递归，在递归调用之前「做选择」，在递归调用之后「撤销选择」。
 * 
 * 穷举整棵决策树是回溯算法的一个特点，不像动态规划存在重叠子问题可以优化，故复杂度一般都很高。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const track = [], res = []
  backtrack(track, nums, res)
  return res
};

function backtrack(track, nums, res){
  if(track.length === nums.length) {
    res.push([...track])
    return
  }
  for(const num of nums){
    if(track.includes(num)) continue
    track.push(num)
    backtrack(track, nums, res)
    track.pop()
  }
}

