/**
 * Union-Find算法，也就是常说的并查集算法，主要是解决图论中「动态连通性」问题的。
 * 「连通」是一种等价关系，具有如下三个性质：
 *   * 自反性：节点p和p是连通的。
 *   * 对称性：如果节点p和q连通，那么q和p也连通。
 *   * 传递性：如果节点p和q连通，q和r连通，那么p和r也连通。
 * 
 * 我们使用森林（若干棵树）来表示图的动态连通性，用parents数组来具体实现这个森林。
 */

class Union_Find {
  // n为图中节点的个数
  constructor(n){
    // 连通分量个数
    this.n = n
    // 存储每个节点的父节点
    this.parents = Array.from({length: n}, (value, key) => key) // value -> 值(此处均为undefined); key -> 索引
    // 记录每棵树的“重量”（每棵树的节点个数），用于优化树的平衡性
    this.size = new Array(n).fill(1)
  }

  /* 将节点p、q连通 */
  union(p, q){
    const rootP = this.find(p)
    const rootQ = this.find(q)
    if(rootP === rootQ) return

    // 优化树的平衡性（大树下接小树）
    // 优化树的平衡性可以使find()、union()、connected()的最坏时间复杂度O(N)降至约O(logN);
    // 但实际上，在使用路径压缩（O(1)）的情况下，没有太大必要再优化树的平衡性（此处写出以供参考）。
    if(this.size[rootP] > this.size[rootQ]){
      this.parents[rootQ] = rootP
      this.size[rootP] += this.size[rootQ]
    }else{
      this.parents[rootP] = rootQ
      this.size[rootQ] += this.size[rootP]
    }
    this.n--
  }

  /* 判断节点p、q是否连通 */
  connected(p, q){
    const rootP = this.find(p)
    const rootQ = this.find(q)
    return rootP === rootQ
  }

  /* 返回某个节点的根节点 */
  find(x){
    /* 无路径压缩 */
    // while(this.parents[x] !== x) x = this.parents[x]
    // return x
    
    /* 路径压缩可将find()、union()、connected()的时间复杂度降至O(1) */

    /* 路径压缩方式一 */
    // while(this.parents[x] !== x) {
    //   this.parents[x] = this.parents[this.parents[x]]
    //   x = this.parents[x]
    // }
    // return x

    /* 路径压缩方式二（比起路径压缩方式一，这种方法压缩得更彻底，直接把一整条树枝压平） */
    if(this.parents[x] !== x) this.parents[x] = this.find(this.parents[x])
    return this.parents[x]
  }

  /* 返回图中连通分量个数 */
  count(){
    return this.n
  }
}

module.exports = {
  Union_Find
}
