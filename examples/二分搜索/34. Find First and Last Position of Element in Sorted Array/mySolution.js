/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    //Find starting postion
    let left=0, right=nums.length-1,startingIdx=0,endingIdx=0
    while(left<=right){
        const mid = left + Math.floor((right-left)/2)
        if(nums[mid]>=target){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    
    if(left>=nums.length || nums[left] !== target){
            startingIdx=-1
        } else{
            startingIdx=left
        }
    
    //Find ending position
    left=0, right=nums.length-1
    while(left<=right){
        const mid = left + Math.floor((right-left)/2)
        if(nums[mid]>target){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    
    if(right<0 || nums[right] !== target){
            endingIdx=-1
        } else{
            endingIdx=right
        }
    if(startingIdx !== -1){
        return [startingIdx,endingIdx]
    }else{
        return [-1,-1]
    }
};