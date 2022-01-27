var carPooling = function(trips, capacity) {
    
    let result = new Array(1001).fill(0)
    result[0] = 0
    for(let [numPassengers, start, end] of trips){
        if(numPassengers>capacity)
            return false
        result[start] += numPassengers
        result[end] -= numPassengers
    }
    for(let i= 1;i<result.length;i++){
        result[i] = result[i] + result[i-1]
        
        if(result[i] > capacity ){
            return false
        }
        else continue
    }
    return true
};