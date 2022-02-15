/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let slow = 0, fast = 0
    for(const i in nums){
        if(nums[fast] !== val){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};