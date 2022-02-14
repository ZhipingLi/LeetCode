/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    let f = x => {
        let hours = 0
        piles.forEach(item => {
            hours+=Math.floor(item/x)
            if(item%x !== 0){
                hours++
            }
        })
        return hours
    }
    let left=1, right=1000000000
    while(left<=right){
        const speed = left + Math.floor(( right - left) / 2 )
        if(f(speed) <= h){
            right = speed-1
        }else{
            left = speed+1
        }
    }
    return left
};