/**
 * 区间问题技巧：
 * 1. 排序：常见的排序方法就是按照区间起点排序，或者先按照起点升序排序，若起点相同，则按照终点降序排序。
 * 2. 画图：确定相对位置
 */
 
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => {
    if(a[0] - b[0] !== 0) return a[0] - b[0]
    else return b[1] - a[1]
  })
  let res = intervals.length, left = intervals[0][0], right = intervals[0][1]
  for(let i = 1; i <= intervals.length - 1; i++){
    const [interval_left, interval_right] = intervals[i]
    // 情况一，找到覆盖区间
    if(interval_right <= right) res--
    // 情况二，两区间相交，合并成一个大区间
    if(interval_left <= right && interval_right > right) right = interval_right
    // 情况三，完全不相交，更新起点和终点
    if(interval_left > right){
      left = interval_left
      right = interval_right
    }
  }
  return res
};