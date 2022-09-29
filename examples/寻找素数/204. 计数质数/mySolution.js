/**
 * 素数定义：如果一个大于 1 的自然数只能被 1 和它本身整除，那么这个数就是素数。（0、1不是素数）
 */

/**
 * @param {number} n
 * @return {number}
 */
/* 函数定义：返回所有小于非负整数 n 的素数的数量。（返回[2, n)中素数的数量） */
 var countPrimes = function(n) {
  const isPrime = new Array(n).fill(true)
  for(let i = 2; i * i < n; i++){
    if(isPrime[i]){
      for(let j = i * i; j < n; j += i){
        isPrime[j] = false
      }
    }
  }
  return isPrime.slice(2).filter(item => item).length
};