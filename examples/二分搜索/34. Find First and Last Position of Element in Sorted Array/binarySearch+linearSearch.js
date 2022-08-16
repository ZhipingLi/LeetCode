/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    // return [nums.indexOf(target), nums.lastIndexOf(target)];
    // binary search
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            // found the key
            let left = middle, right = middle;
            while(nums[left - 1] === nums[left]) {
                left--;
            }
            while(nums[right + 1] === nums[right]) {
                right++;
            }
            return [left, right];
        } else if (nums[middle] < target) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    
    return [-1, -1];
};