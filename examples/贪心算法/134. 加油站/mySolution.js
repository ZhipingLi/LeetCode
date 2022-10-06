/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
/* 函数图像解法 */
 var canCompleteCircuit = function(gas, cost) {
  let sum = 0, minSum = 0, index = -1
  // 找到最有可能的起点
  gas.forEach((item, idx) => {
    sum = sum + item - cost[idx]
    if(sum < minSum) {
      minSum = sum
      index = idx
    }
  })
  // 验证最有可能的起点是否是满足的
  let i = index + 1, j = 1
  sum = 0
  while(j <= gas.length){
    if(i === gas.length) i = 0
    sum = sum + gas[i] - cost[i]
    if(sum < 0) return -1
    i++
    j++
  }
  // 此时可以直接通过sum < 0（总油量小于总消耗）判断是否能环游所有的站点。
  // if(sum < 0) return -1
  return index + 1 === gas.length ? 0 : index + 1
};

/* 贪心思想解法 */
/**
 * 结论：如果选择站点 i 作为起点「恰好」无法走到站点 j，那么 i 和 j 中间的任意站点 k 都不可能作为起点。
 * 因为从 i 到 k 时，此时的油量恒大于 0；而从 k 到 j，k 的初始油量为 0。
 * 
 * 从for循坏可以得出0...start - 1都不能作为起点，剩下的点为start...n - 1，且start是可以走到n - 1的；
 * 此时，如果n - 1作为起点，那么在n - 1处油量为 0；
 * 而如果n - 2作为起点，在n - 1处的油量大于 0；
 * n - 3作为起点时，在n - 1处的油量大于n - 2作为起点在n - 1处的油量。
 * 以此类推，start即为最有可能的解。
 */
 
var canCompleteCircuit = function(gas, cost) {
  let sum = gas.reduce((prev, curr, index) => {
    return prev + curr - cost[index]
  }, 0)
  // 总油量小于总的消耗，无解
  if(sum < 0) return -1

  let start = 0, tank = 0
  for(let i = start; i <= gas.length - 1; i++){
    tank = tank + gas[i] - cost[i]
    // 无法从 start 走到 i + 1
    if(tank < 0) {
      start = i + 1
      tank = 0
    }
  }
  return start === gas.length ? 0 : start
}