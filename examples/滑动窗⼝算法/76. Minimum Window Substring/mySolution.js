/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let left=0
    let right=0
    let valid=0
    let start = 0
    let len = Number.MAX_VALUE
    let need = new Map()
    for (d of t){
        need.has(d) ? need.set(d,need.get(d)+1) : need.set(d,1)
    }
    let window = new Map()
    while(right<s.length){
        let d = s[right]
        right++
        if(need.has(d)){
            window.has(d) ? window.set(d,window.get(d)+1) : window.set(d,1)
            window.get(d) === need.get(d) && valid++
        }
        while(valid === need.size){
            if(right-left < len){ //判断最⼩覆盖窗口
                start = left
                len = right-left
            }
            let c = s[left]
            left++
            if(need.has(c)){
                window.set(c,window.get(c)-1)
                window.get(c) < need.get(c) && valid--
            }
          }
    }
    return len === Number.MAX_VALUE ? "" : s.substr(start,len)
    
};