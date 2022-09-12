/**
 * 本题中，「状态」无非就是i和j两个指针的位置，「选择」就是p[j]的匹配情况。
 * 
 * 动态规划的时间复杂度为「状态的总数」*「每次递归花费的时间」。本题中状态的总数为i和j的组合，也就是M * N（M为s的长度，N为p的长度）；
 * 递归函数dp中没有循环（base case 中的不考虑，因为 base case 的触发次数有限），所以一次递归花费的时间为常数。二者相乘，总时间复杂度为O(MN)。
 * 
 * 空间复杂度为备忘录memo的大小，即O(MN)。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
  const m = s.length, n = p.length, memo = new Map()
  return dp(0, 0)
  // dp函数定义：dp(i, j)表示s[i...]是否可以被p[j...]匹配
  function dp(i, j){
    // base case
    if(j === n) return i === m
    if(i === m){ // 不能直接根据j是否等于p.length来判断是否完成匹配，只要p[j..]能够匹配空串，也是可以完成匹配的。
      // 如果能匹配空串，一定是字符和 * 成对儿出现
      if((n - j) % 2 === 1) return false
      // 检查是否为 x*y*z* 这种形式
      for(; j + 1 <= n - 1; j += 2){
        if(p[j + 1] !== '*') return false
      }
      return true
    }

    const key = i + ',' + j
    if(memo.has(key)) return memo.get(key)

    let res = null
    if(s[i] === p[j] || p[j] === '.'){
      // 匹配
      if(j + 1 <= n - 1 && p[j + 1] === '*'){
        // 有 * 通配符，可以匹配 0 次或多次
        res = dp(i + 1, j) || dp(i, j + 2)
      }else{
        // 无 * 通配符，常规匹配 1 次
        res = dp(i + 1, j + 1)
      }
    }else{
      // 不匹配
      if(j + 1 <= n - 1 && p[j + 1] === '*'){
        // 有 * 通配符，转换为匹配 0 次
        res = dp(i, j + 2)
      }else{
        // 无 * 通配符，无法匹配
        res = false
      }
    }
    memo.set(key, res)
    return res
  }
};