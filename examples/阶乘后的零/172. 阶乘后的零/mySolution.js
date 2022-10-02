/**
 * @param {number} n
 * @return {number}
 */
/* 增大除数 */
var trailingZeroes = function(n) {
  let res = 0, divisor = 5
  while(n >= divisor){
    res += Math.floor(n / divisor)
    divisor *= 5 // 注意divisor越界问题
  }
  return res
};

/* 减小被除数 */
var trailingZeroes = function(n) {
  let res = 0
  for( ; n / 5 >= 1; n = Math.floor(n / 5)){
    res += Math.floor(n / 5)
  }
  return res
};