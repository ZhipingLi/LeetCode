/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
    //res -> # of opening parentheses, need -> # of closing parentheses
    let res = 0, need = 0
    for(c of s.split('')){
        if(c === '('){
            need++
        }else{
            need--
            if(need === -1){
                res++
                need = 0
            }
        }
    }
    return need + res
};