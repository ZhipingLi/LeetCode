/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let slow =0, fast = 0;
    for(idx in nums){
        if(nums[slow] !== nums[fast]){
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    return slow + 1
};