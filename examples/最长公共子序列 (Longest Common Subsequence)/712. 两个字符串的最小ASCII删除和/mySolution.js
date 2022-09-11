/**
 * 该题不能直接复用计算最长公共子序列长度的函数。
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
 var minimumDeleteSum = function(s1, s2) {
  const m = s1.length, n = s2.length
  const memo = Array.from(s1, () => new Array(n))
  return dp(0, 0)

  // dp函数定义：将s1[i...]和s2[j...]删除成相同字符串所需删除字符的ASCII值的最小和为dp(i, j)。
  function dp(i, j){
    let res = 0
    if(i === m){
      // 如果s1到头了，那么s2剩下的都得删除
      for( ; j < n; j++){
        res += s2.charCodeAt(j)
      }
      return res
    }
    if(j === n){
      // 如果s2到头了，那么s1剩下的都得删除
      for( ; i < m; i++){
        res += s1.charCodeAt(i)
      }
      return res
    }
    if(memo[i][j] !== undefined) return memo[i][j]
    if(s1.charCodeAt(i) === s2.charCodeAt(j)){
      // s1[i]和s2[j]都在LCS中，不用删除
      memo[i][j] = dp(i + 1, j + 1)
    }else{
      // s1[i]和s2[j]中至少有一个不在LCS中，删除一个（都不在的情况数值最大，不予考虑）
      memo[i][j] = Math.min(s1.charCodeAt(i) + dp(i + 1, j), s2.charCodeAt(j) + dp(i, j + 1))
    }
    return memo[i][j]
  }
};