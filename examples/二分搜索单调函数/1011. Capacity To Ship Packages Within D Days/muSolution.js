/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function(weights, days) {
    let f = x => {
        let result = 1
        let cap = x
        for(const weight of weights){
            if(cap>=weight){
                cap-=weight
            }else{
                cap = x -weight
                result++
            }
        }
        return result
    }
    let left=Math.max(...weights), right = weights.reduce((x,y) => x+y)
    while(left<=right){
        const mid = left + (Math.floor(right-left>>2))
        if(f(mid)>days){
            left = mid + 1
        }else{
            right = mid -1 
        }
    }
    return left
};