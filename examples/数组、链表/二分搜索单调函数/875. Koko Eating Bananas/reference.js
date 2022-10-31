/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    let lo = 1, hi = Math.max(...piles); // Math.max()
    
    while (lo < hi) {
        let mid = lo + (hi - lo >> 1); // >> 操作符 （加减乘除优先级高于位移运算符）
        let hourSpent = 0;
        
        for (const pile of piles) {
            hourSpent += Math.ceil(pile / mid); // Math.ceil()
            if (hourSpent > h)
                break;
        }
        
        if (hourSpent > h)
            lo = mid + 1;
        else
            hi = mid;
    }
    
    return lo;
};