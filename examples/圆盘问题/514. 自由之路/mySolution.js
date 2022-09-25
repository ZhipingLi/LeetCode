/**
 * 本题可转化为：圆盘固定，拨动指针；现在需要我们拨动指针并按下按钮，以最少的操作次数输入参数key对应的字符串。
 * 
 * 「状态」：「当前需要输入的字符」和「当前圆盘指针的位置」。
 * 
 * 「选择」：「如何拨动指针得到待输入的字符」（目标字符数*2(顺时针、逆时针)）。
 * 
 * dp定义：当圆盘指针指向 ring[i]（圆盘指针当前状态）时，输入字符串 key[j..] 至少需要 dp(i, j) 次操作。
 */

/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
 var findRotateSteps = function(ring, key) {
  const ringLength = ring.length, keyLength = key.length
  const memo = new Map()
  return dp(0, 0)
  
  // dp函数定义：dp(i, j)返回从当前指针指向ring[i]时，输入key[j...]，至少需要多少次操作数。
  function dp(i, j){
    // base case
    if(j === keyLength) return 0
    
    const key = i + ',' + j
    if(memo.has(key)) return memo.get(key)
    
    let res = Infinity
    const options = findOptions(i, j)
    for(const option of options){
      res = Math.min(dp(option[1], j + 1) + 1 + option[0], res)
    }
    memo.set(key, res)
    return res
  }
  
  function findOptions(i, j){
    let options = []
    let startIndex = 0
    let index = ring.indexOf(key[j], startIndex)
    while(index !== -1){ // 找到有多少个目标字符，记录下索引（目标字符可能不止一个）
      options.push(index)
      startIndex = index + 1
      index = ring.indexOf(key[j], startIndex)
    }
    options = options.map(index => {
      // 对于一个目标字符，在环形字符串中找最短步长
      const step1 = Math.abs(i - index) // 顺时针或逆时针步长
      const step2 = ringLength - step1 // 逆时针或顺时针步长
      return [Math.min(step1, step2), index]
    })
    return options
  }
};

