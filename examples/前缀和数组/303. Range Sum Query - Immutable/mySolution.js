// 前缀和
var NumArray = function (nums) {
    this.temp = nums
    this.ret = []
    let tt = 0;
    for (let i = 0; i < nums.length; i++) {
      tt = tt + nums[i]
      this.ret.push(tt)
    }
  };
  
  NumArray.prototype.sumRange = function (i, j) {
    if (j == i) {
      return this.temp[i]
    }
    if (i == 0) {
      return this.ret[j]
    }
    return this.ret[j] - this.ret[i - 1]
  };
