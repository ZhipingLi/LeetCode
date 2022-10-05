/**
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression) {
  const memo = new Map()
  return calc(expression)

  function calc(expression){
    if(memo.has(expression)) return memo.get(expression)
    const res = []
    for(let charIndex in expression){
      charIndex = Number(charIndex)
      const char = expression[charIndex]
      if(char === '+' || char === '*' || char === '-'){
        /****** 分 ******/
        // 以运算符为中心，分割成两个字符串，分别递归计算
        const str1 = expression.substring(0, charIndex)
        const res1 = calc(str1)
        const str2 = expression.substring(charIndex + 1)
        const res2 = calc(str2)

        /****** 治 ******/
        // 通过子问题的结果，合成原问题的结果
        res1.forEach(item1 => {
          res2.forEach(item2 => {
            // 不要使用eval(), eval函数无法处理eval(1 - -1)
            if(char === '+') res.push(item1 + item2)
            else if(char === '-') res.push(item1 - item2)
            else res.push(item1 * item2)
          })
        })
      }
    }

    // base case
    // 如果 res 为空，说明算式是一个数字，没有运算符
    if(res.length === 0) res.push(BigInt(expression))
    memo.set(expression, res)
    return res
  }
};