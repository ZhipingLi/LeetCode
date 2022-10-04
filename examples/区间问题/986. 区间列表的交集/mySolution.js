/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
  let i = 0, j = 0
  const res = []
  while(i <= firstList.length - 1 && j <= secondList.length - 1){
    const first = firstList[i], second = secondList[j]
    // 有交集
    if(first[1] >= second[0] && second[1] >= first[0]){
      // 两集合有交集时，交集区间为 [Math.max(start1, start2), Math.min(end1, end2)]
      const left = Math.max(first[0], second[0])
      const right = Math.min(first[1], second[1])
      res.push([left, right])
    }
    // i, j是否前进，只取决于end1和end2的大小关系
    if(first[1] > second[1]) j++
    else i++
  }
  return res
};