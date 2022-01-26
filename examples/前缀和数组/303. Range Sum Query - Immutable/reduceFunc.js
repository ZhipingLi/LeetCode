var NumArray = function (nums) {
    this.temp = nums
  };
  
  NumArray.prototype.sumRange = function (i, j) {
    let t = this.temp.slice(i, j + 1),
      ret = 0;
    if (t.length == 1) {
      return t[0]
    }
    t.reduce(function (preValue, curValue) {
      return ret = preValue + curValue;
    })
    return ret
  };