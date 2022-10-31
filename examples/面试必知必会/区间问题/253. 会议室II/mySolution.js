/**
 * 如果把每个会议的起始时间看做一个线段区间，那么题目就是求最多有几个重叠区间。
 * 
 * 基本思路：通过差分数组实现计算会议时间的重叠次数，但空间复杂度为O(N)。
 * 
 * 改进思路：扫描线（带计数器的指针在时间线上从左至右扫描，遇到线段起始点count++，遇到线段结束点count--）
 */

/**
 * @param {number[][]} meetings
 * @return {number}
 */
 var minMeetingRooms = function(meetings) {
  const begin = [], end = []
  meetings.forEach(([startTime, endTime]) => {
    begin.push(startTime)
    end.push(endTime)
  })
  begin.sort((a, b) => a - b)
  end.sort((a, b) => a - b)

  let i = 0, j = 0, res = 0, count = 0
  while(i <= meetings.length - 1){
    if(begin[i] <= end[j]){ // 此处取等号，在[10, 20], [20, 30]情况下先加后减
      count++
      i++
      res = Math.max(res, count)
    }else{
      count--
      j++
    }
  }
  return res
 }
