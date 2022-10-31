/**
 * 0-1背包问题：
 * 给定一个可装载重量为 W 的背包和 N 个物品，每个物品有重量和价值两个属性。
 * 其中第 i 个物品的重量为 wt[i]，价值为 val[i]，问如果使用这个背包装物品，最多能装的价值是多少？
 * 
 * Example：
 * Input：
 * N = 3, W = 4
 * wt = [2, 1, 3]
 * val = [4, 2, 3]
 * 
 * Output：
 * 6（选择前两件物品装进背包，总重量 3 小于 W，可以获得最大价值 6。）
 * 
 * 背包问题状态为「背包容量」和「可选择的物品」；选择为「装进背包」和「不装进背包」。
 */

 function fillBag(N, W, wt, val) {
  return dp(N, W)

  // dp函数定义：dp(n, w)返回对于前n个物品，背包容量为w时，可以装的最大价值。
  function dp(n, w) {
    // base case
    if(n === 0) return 0
    const weight = wt[n - 1], value = val[n - 1]
    if(w >= weight) {
      // 装⼊或者不装⼊背包，择优
      return Math.max(dp(n - 1, w - weight) + value, dp(n - 1, w))
    }else{
      // 这种情况下只能选择不装⼊背包
      return dp(n - 1, w)
    }
  }
}

