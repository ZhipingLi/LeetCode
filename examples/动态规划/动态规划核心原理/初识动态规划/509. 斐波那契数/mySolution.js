/**
 * 动态规划问题的一般形式就是求最值，求解动态规划的核心问题就是穷举。
 * 
 * 动态规划的穷举有点特别，因为这类问题存在「重叠子问题」，如果暴力穷举的话效率会极其低下，所以需要「备忘录」或者「DP table」来优化穷举过程，避免不必要的计算。
 * 
 * 动态规划问题一定会具备「最优子结构」，才能通过子问题的最值得到原问题的最值。
 * 「最优子结构」的要求为：子问题间必须互相独立。
 * 
 * 「状态转移方程」: 将f(n)当做⼀个状态n，该状态n是由状态n - 1和状态n - 2相加转移而来，这就叫状态转移。
 * 
 * 「重叠子问题」、「最优子结构」、「状态转移方程」是动态规划三要素。
 * 
 * 思维框架：明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义
 * 
 * # 初始化 base case
 * dp[0][0][...] = base
 * # 进⾏状态转移
 * for 状态1 in 状态1的所有取值：
 *    for 状态2 in 状态2的所有取值：
 *        for ...
 *            dp[状态1][状态2][...] = 求最值(选择1，选择2...)
 * 
 * 确定「状态」，也就是原问题和子问题中会变化的变量。
 * 确定「选择」，也就是导致「状态」产生变化的行为。
 */
 
/**
 * @param {number} n
 * @return {number}
 */
/* 带备忘录的递归解法：自顶向下 -> dp函数 */
 var fib = function(n) {
  const memo = []
  return recurse(n)

  function recurse(n){
    if(n === 0 || n === 1) return n
    if(memo[n]) return memo[n]
    memo[n] = recurse(n - 1) + recurse(n - 2)
    return memo[n]
  }
};

/**
 * 「自顶向下」是从上向下延伸，都是从⼀个规模较大的原问题比如说f(20)，向下逐渐分解规模，直到f(1)和f(2)这两个base case，然后逐层返回答案。
 * 「自底向上」是从最底下，最简单，问题规模最小的f(1)和f(2)开始往上推，直到推到想要的答案f(20)，这就是动态规划的思路，这也是为什么动态规划⼀般都脱离了递归，而是由循环迭代完成计算。
 */

/* 带dp数组的迭代解法（动态规划）：自底向上 -> dp数组 */
var fib = function(n) {
  if(n === 0) return 0
  // base case
  const dp = [0, 1]
  // 状态转移
  for(let i = 2; i <= n; i++){
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

/**
 * 「状态压缩」：如果我们发现每次状态转移只需要DP table中的一部分，那么可以尝试用状态压缩来缩小DP table的大小，只记录必要的数据。
 */

/* 状态压缩 */
var fib = function(n) {
  if(n === 0) return 0
  if(n === 2 || n === 1) return 1
  let prev = 1, curr = 1
  for(let i = 3; i <= n; i++){
    const sum = prev + curr
    prev = curr
    curr = sum
  }
  return curr
}