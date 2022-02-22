/**
 * @param {string} s
 * @return {number}
 */
 var minInsertions = function(s) {
    let res = 0, need = 0 // 操作res值表示结算
    for(c of s.split('')){
        if(c === '('){
            need+=2
            if(need % 2 === 1){
                // 插⼊⼀个右括号 
                res += 1 // 结算之前在相对平衡状态（如：'{...{'）下插入一个'}'后缺的另一个'}'
                // 对右括号的需求减⼀
                need--
            }
        }else{
            need--
            if(need === -1){
                res++ // 结算在平衡状态（'{...{}...}'）下插入'}'时用于匹配的'{'
                need = 1
            }
        }
    }
    return res+need
};