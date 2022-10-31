/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    let count = [], arr = [], boolArr = []
    for(const c of s.split('')){
        if(count[c]) count[c]++
        else count[c] = 1
    }
    for(const c of s.split('')){
        count[c]--
        if(boolArr[c]) continue
        while(arr.length && c < arr[arr.length-1] && count[arr[arr.length-1]]){
            boolArr[arr.pop()] = false
        }
        arr.push(c)
        boolArr[c] = true
    }
      return arr.join('')
  };