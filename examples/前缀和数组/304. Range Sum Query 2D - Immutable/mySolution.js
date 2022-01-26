// 前缀矩阵和
/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    let length = matrix.length
    let width = matrix[0].length
    if(length === 0 || width === 0)  return;
    this.pre = []
    for (let i=0; i <= length; i++){
        this.pre.push([])
        for (let j=0; j <= width; j++){
            this.pre[i].push(0)
        }
    }
    for (let i=1; i <= length; i++){
        for (let j=1; j <= width; j++){
            this.pre[i][j]= this.pre[i-1][j] + this.pre[i][j-1] - this.pre[i-1][j-1] + matrix[i-1][j-1]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.pre[row2+1][col2+1] - this.pre[row2+1][col1] - this.pre[row1][col2+1] + this.pre[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */