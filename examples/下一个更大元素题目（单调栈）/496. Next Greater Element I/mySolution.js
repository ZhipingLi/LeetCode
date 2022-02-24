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