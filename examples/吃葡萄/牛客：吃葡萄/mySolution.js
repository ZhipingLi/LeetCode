/**
 * 「吃得最多的人吃得最少」意味着将葡萄「尽可能地平均分配」。
 * 而吃的最多的人吃掉的葡萄颗数就是(a + b + c) / 3向上取整的结果，也就是(a + b + c + 2) / 3。
 * 
 * PS：大部分编程语言中，计算 M 除以 N，M / N会向下取整，如果想向上取整，可以改为(M + (N - 1)) / N。
 * 虽然JS中Number类型之间的除法运算不会向上或向下取整，不过可以使用Math.ceil/floor()完成向上、向下取整。
 * 但JS中BigInt类型之间的除法运算会向下取整（忽略小数部分），且BigInt类型不能用于Math对象中的方法；不能与Number实例运算。
 * 
 * BigInt其他注意之点：
 * 1. BigInt('1234')  √
 * 2. typeof 1234n -> bigint    typeof Object(1n) -> object    typeof symbol值 -> symbol    typeof Object(symbol值) -> object
 * 3. BigInt不支持单目(+)运算符
 * 4. BigInt与Number非严格相等的，但是是宽松相等的。
 * 5. BigInt与Number可以进行比较（>, >=, <, <=）。
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
  const tokens = line.split(' ').map(BigInt)
  if(tokens.length === 1) return
  console.log(mySolution(tokens).toString()) // 必须转化为字符串输出，否则结果类似1n, 2n, ...
  /**
   * 1234.toString()  ×
   * 1234n.toString()  √
   * foo().toString()  √
   */
});

function mySolution(nums){
  // 此处不能使用nums.sort((a, b) => a - b)，因为a - b返回的是BigInt类型数据（TypeError: Cannot convert a BigInt value to a number）。
  const [a, b, c] = nums.sort((a, b) => a < b ? -1 : 1)
  /**
   * 注意：Array.prototype.sort(compareFn?)省略compareFn时，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。
   * 此时会出现[11, 1, 2].sort() -> [1, 11, 2]
   */
  const sum = a + b + c
  // 可以构成三角形
  if(a + b > c) return (sum + 2n) / 3n
  // 不能构成三角形之情况二
  if(c > (a + b) * 2n) return (c + 1n) / 2n
  // 不能构成三角形之情况一
  return (sum + 2n) / 3n
}
