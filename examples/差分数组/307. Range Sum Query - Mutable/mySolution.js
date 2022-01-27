
var rangeAddition = function(operationArrays, k) {
    // operationArrays: [[startIndex, endIndex, inc],[startIndex, endIndex, inc]...]
    let diff = new Array(k).fill(0)
    operationArrays.forEach(item => {
        diff[item[0]] += item[2]
        if(item[1]+1 < k){
            diff[item[1]+1] -= item[2]
        }
    })
    let nums = [diff[0]]
    for(let i=1; i<k; i++){
        nums.push(diff[i] + nums[i-1])
        
    }
    return nums
};