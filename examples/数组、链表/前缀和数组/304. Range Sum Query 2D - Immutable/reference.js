/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    const m = matrix.length + 1;
    const n = matrix[0].length + 1;
    
    this.dp = new Array(m);
    
    for (let i = 0; i < m; ++i) {
        this.dp[i] = new Array(n).fill(0);
    }
    
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            this.dp[i][j] = matrix[i - 1][j - 1] + this.dp[i - 1][j] + this.dp[i][j - 1] - this.dp[i - 1][j - 1];
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
    return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */