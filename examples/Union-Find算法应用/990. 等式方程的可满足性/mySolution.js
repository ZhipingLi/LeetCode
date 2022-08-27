const {Union_Find} = require('../../Union-Find（并查集算法）/Union-Find.js')

/**
 * 核心思想：
 * 将 equations 中的算式根据 == 和 != 分成两部分，先处理 == 算式，使得他们通过相等关系各自勾结成门派（连通分量）；
 * 然后处理 != 算式，检查不等关系是否破坏了相等关系的连通性。
 */

/**
 * @param {string[]} equations
 * @return {boolean}
 */
 var equationsPossible = function(equations) {
  const uf = new Union_Find(26)
  for(const equation of equations){
    const symbol = equation.charAt(1)
    if(symbol === '='){
      const left = equation.charCodeAt(0)
      const right = equation.charCodeAt(3)
      uf.union(left - 97, right - 97)
    }
  }
  for(const equation of equations){
    const symbol = equation.charAt(1)
    if(symbol === '!'){
      const left = equation.charCodeAt(0)
      const right = equation.charCodeAt(3)
      if(uf.connected(left - 97, right - 97)) return false
    }
  }
  return true
};

/**
 * 字母转数字：String.prototype.charCodeAt(index)
 *   const letter = 'a'
 *   letter.charCodeAt(0) // 97
 * 
 * 数字转字母：String.fromCharCode(num1[, ...[, numN]])
 *   const num = 65
 *   String.fromCharCode(num) // 'A'
 */