/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
    let diff = new Array(n).fill(0)
    bookings.forEach( item => {
        diff[item[0]-1]+=item[2]
        if(item[1]<n){
            diff[item[1]]-=item[2]
        }
    })
    let answer = [diff[0]]
    for(let i=1; i<diff.length;i++){
        answer.push(diff[i]+answer[i-1])
    }
    return answer
    
};