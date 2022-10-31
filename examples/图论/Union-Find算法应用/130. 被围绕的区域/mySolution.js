/**
 * 解释：
 * 1.被围绕的区间不会存在于边界上，换句话说，任何边界上的'O'都不会被填充为'X'。
 * 2.任何不在边界上，且不能通过'O'与边界上的'O'相连的'O'最终都会被填充为'X'。
 * 
 * 解决这个问题的传统方法为：
 * 先将那些可以通过'O'与边界'O'相连的'O'替换成特殊字符如'#'，然后再遍历整个棋盘，把剩下的'O'换成'X'，再把'#'恢复成'O'。时间复杂度为O(MN)。
 * 这个问题也可以用Union-Find算法解决，虽然实现复杂⼀些，甚至效率也略低，但这是使用Union-Find算法的通用思想。
 */

 const {Union_Find} = require('../../Union-Find（并查集算法）/Union-Find.js')

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
  const m = board.length
  const n = board[0].length
  const uf = new Union_Find(m * n + 1)
  const dummy = m * n // 虚拟节点
  for(let i = 0; i <= m - 1; i++){
    for(let j = 0; j <= n - 1; j++){
      // 将首行、末行、首列、末列的'O'与dummy连通
      if(i === 0 || i === m - 1 || j === 0 || j === n - 1){
        board[i][j] === 'O' && uf.union(dummy, i * n + j)
      }else{
        // 将此'O'与上下左右的'O'连通
        if(board[i][j] === 'O'){
          if(board[i][j + 1] === 'O') uf.union(i * n + j, i * n + j + 1)
          if(board[i][j - 1] === 'O') uf.union(i * n + j, i * n + j - 1)
          if(board[i + 1][j] === 'O') uf.union(i * n + j, (i + 1) * n + j)
          if(board[i - 1][j] === 'O') uf.union(i * n + j, (i - 1) * n + j)
        }
      }
    }
  }
  // 将所有不和dummy连通的'O'都替换成'X'
  for(let i = 0; i <= m - 1; i++){
    for(let j = 0; j <= n - 1; j++){ 
      if(!uf.connected(i * n + j, dummy) && board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
};