/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let left=0,right=0,res=0
    let window=new Map()
    while(right<s.length){
        const c = s[right]
        right++
        if(window.has(c)){
            window.set(c,window.get(c) + 1)
            while(window.get(c)===2){
                  const d = s[left]
                  left++
                window.set(d,window.get(d) - 1)
            } 
        }else{
            window.set(c,1)
        }
        if(right-left>res) res = right-left
    }
    return res===0 ? s.length : res 
};