/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  // 备忘录
  // const memo = Array.from({length: n + 1}, () => new Array(n + 1).fill(0)) // 二维数组
  const memo = Array.from({length: n + 1}, () => [])
  // 函数定义：闭区间[lo, hi]的数字能组成count(lo, hi)种BST
  function count(lo, hi){
    // 注意：base case不能返回0，之后会用于相乘
    if(lo > hi) return 1
    if(memo[lo][hi]) return memo[lo][hi]
    let res = 0
    for(let i = lo; i <= hi; i++){
      const left = count(lo, i - 1)
      const right = count(i + 1, hi)
      res += left * right
    }
    memo[lo][hi] = res
    return res
  }
  return count(1, n)
};

