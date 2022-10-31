/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    const map = new Map([[0, 1]]);
      let sum = 0;
      let total = 0;
      for (let num of nums) {
          sum = sum + num;
          total += (map.get(sum - k) || 0);
          map.set(sum, (map.get(sum) || 0) + 1);
      }
      
      return total;
  };