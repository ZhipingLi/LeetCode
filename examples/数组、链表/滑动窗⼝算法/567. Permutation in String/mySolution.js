/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let left=0,right=0,valid=0
    let need=new Map(),window=new Map()
    s1.split('').forEach(s => need.set(s,(need.get(s) || 0)+1))
    while(right<s2.length){
        const c = s2[right]
        if(need.has(c)){
            window.set(c,(window.get(c) || 0)+1)
            window.get(c) === need.get(c) && valid++
        }
        right++
        while(right-left===s1.length){
            if(valid === need.size) return true
            const d = s2[left]
            left++
            if(need.has(d)){
                window.get(d) === need.get(d) && valid--
                window.set(d,window.get(d)-1)
            }
        }
    }
    return false
};
