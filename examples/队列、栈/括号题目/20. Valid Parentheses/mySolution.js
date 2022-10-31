/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let left = []
    for(c of s.split('')){
        if(c === '(' || c === '[' || c === '{'){
            left.push(c)
        }else{
            const cc = c === ')' ? '(' : ( c === ']' ? '[' : '{')
            if(left.length && cc === left[left.length-1]) left.splice(left.length-1,1) //注意：别忘记left.length
            else return false
        }
    } 
    return left.length === 0
};