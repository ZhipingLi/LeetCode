/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const merges = [intervals[0]]
  for(let i = 1; i <= intervals.length - 1; i++){
    const last = merges[merges.length - 1]
    const [interval_left, interval_right] = intervals[i]
    if(interval_right <= last[1]) continue 
    if(interval_left <= last[1] && interval_right > last[0]) last[1] = interval_right
    if(interval_left > last[1]){
      merges.push([interval_left, interval_right])
    }
  }
  return merges
};