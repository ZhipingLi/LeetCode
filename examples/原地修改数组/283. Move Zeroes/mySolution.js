/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let slow = 0
    
    for(const fast in nums){
        if(nums[fast] !== 0){
            nums[slow] = nums[fast]
            slow++
            fast>slow-1 && (nums[fast] = 0)
        }
    }
};