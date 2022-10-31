/**
 * Union-Find解法的时间复杂度（O(N)，N为单元正方形的数量）略高。
 * 
 * 更优解（O(N)，N为rectangles.length，每个rectangle四个顶点，4N）：
 * 判断最终形成的图形是否是完美矩形，从「面积」和「顶点」两个角度来处理。
 * 
 * 顶点：最终形成的大矩形只拥有4个奇数顶点，且这4个顶点为该大矩形的4个角。
 * 
 * 顶点处理：
 * 如果某一个顶点 p 存在于集合 points 中，则将它删除；如果不存在于集合 points 中，则将它插入。
 * 最终，points 集合只会留下出现了奇数次的顶点，出现了偶数次的顶点都会被消掉。
 */
 
/* Union-Find解法 */
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
 var isRectangleCover = function(rectangles) {
  let bot = [], top = [], min = Infinity, max = -Infinity
  rectangles.forEach(([x1, y1, x2, y2]) => {
    if(x1 + y1 < min) {
      bot = [x1, y1]
      min = x1 + y1
    }
    if(x2 + y2 > max) {
      top = [x2, y2]
      max = x2 + y2
    }
  })
  const m = top[0] - bot[0], n = top[1] - bot[1], total = m * n
  const uf = new Union_Find(total + 1)
  for(const [x1, y1, x2, y2] of rectangles){
    const length = x2 - x1, width = y2 - y1
    for(let i = 0; i <= length - 1; i++){
      for(let j = 0; j <= width - 1; j++){
        if(uf.connected(0, coordinateToIndex(x1 + i, y1 + j))) return false
        uf.union(0, coordinateToIndex(x1 + i, y1 + j))
      }
    }
  }
  return uf.count() === 1

  function coordinateToIndex(x2, y2){
    const [x1, y1] = bot
    return (y2 - y1) * m + x2 - x1 + 1
  }
};

class Union_Find {
  constructor(n){
    this.n = n
    this.parents = Array.from({length: n}, (value, index) => index)
  }

  connected(p, q){
    const rootP = this.find(p)
    const rootQ = this.find(q)
    return rootQ === rootP
  }

  union(q, p){
    const rootP = this.find(p)
    const rootQ = this.find(q)
    if(rootP === rootQ) return
    this.parents[rootQ] = rootP
    this.n--
  }

  find(x){
    if(this.parents[x] !== x) this.parents[x] = this.find(this.parents[x])
    return this.parents[x]
  }

  count(){
    return this.n
  }
}