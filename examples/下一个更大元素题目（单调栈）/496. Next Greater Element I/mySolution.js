/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let ans = new Array(nums1.length)
    nums1.forEach((item,index) => {
        let idx = nums2.indexOf(item)
        for(;idx<=nums2.length-1;idx++){
            if(nums2[idx] > item){
                ans[index] = nums2[idx]
                break
            }
            if(idx === nums2.length-1) ans[index] = -1
        }
        
    })
    return ans
};

// 单调栈解法：

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    const arr = [], res = [], ans = []
    for(let i = nums2.length - 1; i >= 0; i--){
      const num = nums2[i]
      while(arr.length && arr[arr.length - 1] <= num){
        arr.pop()
      }
      res[i] = arr.length ? arr[arr.length - 1] : -1
      arr.push(num)
    }
    nums1.forEach((item, idx) => {
      const index = nums2.indexOf(item)
      ans[idx] = res[index]
    })
    return ans
  };