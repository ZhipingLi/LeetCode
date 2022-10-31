/**
 * 注意：
 * 1. 计算器要求实现除法运算时，向零取整。
 * 2. if分支顺序不宜调换，且不能使用if...else。
 * 3. 乘除法优先于加减法体现在，乘除法可以和栈顶的数结合，而加减法只能把自己放入栈。
 * 4. 递归调用解决括号问题。
 */

/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
  const arr = s.split('')
  return calc(arr)
};

function calc(arr){
  const stack = []
  let sign = '+', numStr = ''
  while(arr.length){
    const char = arr.shift()
    // ' '跳过不处理
    if('1234567890'.includes(char)) numStr += char
    if(char === '(') numStr = calc(arr).toString()
    // char === ')' 确保...(1+2)...时，括号中的最后一个元素被计算在内（如：2），因为此时2并非为整个算式最后一个元素，即不能通过arr.length === 0计算到。（本质原因：子括号中的arr不是子数组）
    if('+-*/'.includes(char) || arr.length === 0 || char === ')'){
      switch(sign) {
        case '+':
          stack.push(Number(numStr))
          break
        case '-':
          stack.push(-Number(numStr))
          break
        case '*':
          stack.push(stack.pop() * Number(numStr))
          break
        case '/':
          let num = stack.pop() / Number(numStr)
          // 向零取整
          if(num > 0) num = Math.floor(num)
          else num = Math.ceil(num)
          stack.push(num)
          break
      }
      sign = char
      numStr = ''
    }
    if(char === ')') break
  }
  return stack.reduce((prev, curr) => prev + curr, 0)
}