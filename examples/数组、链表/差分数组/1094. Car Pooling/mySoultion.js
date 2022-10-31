/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
 var carPooling = function(trips, capacity) {
    let diff = Array.from({length:1001},()=>0)
    trips.forEach(item => {
        const [n,i,j] = item
        diff[i]+=n
        //乘客在此时会下车。常规差分数组是[i,j]增加，故diff[j+1]-=n
        diff[j]-=n
    })
    if(diff[0] > capacity) return false
    const num = [diff[0]]
    for(let i=1; i<1001;i++){
        num[i]=num[i-1]+diff[i]
        if(num[i]>capacity) return false
    }
    return true
    
};