/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
    const result = Array.from({ length: n }, () => 0);
    for(const [start, end, seats] of bookings) {
      result[start - 1] += seats;
      if(end < n) {
        result[end] -= seats;
      }
    }
    
    for(let i = 1; i < n; i++) {
      result[i] += result[i - 1];
    }
    
    return result
  };