/**
 * @param {number} k
 * @return {number}
 */
 var preimageSizeFZF = function(k) {
  let left = 0, right = Number.MAX_SAFE_INTEGER, min = -1, max = -1
  while(left <= right){
    const mid = left + Math.floor((right - left) / 2)
    if(f(mid) < k){
      left = mid + 1
    }else{
      right = mid - 1
    }
  }
  min = left // 左边界

  left = 0, right = Number.MAX_SAFE_INTEGER
  while(left <= right){
    const mid = left + Math.floor((right - left) / 2)
    if(f(mid) <= k){
      left = mid + 1
    }else{
      right = mid - 1
    }
  }
  max = right // 右边界
  return max - min + 1
};

// 求x!后面的0的个数
function f(x){
  let res = 0
  for( ; x / 5 >= 1; x = Math.floor(x / 5)){
    res += Math.floor(x / 5)
  }
  return res
}