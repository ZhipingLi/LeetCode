/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let left = 0, right = nums.length - 1
    while(left <= right){
      if(nums[right] === val) right--
      if(nums[left] !== val){
        left++
      }else{
        nums[left] = nums[right]
        right--
      }
    }
    return left
  };

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
//  var removeElement = function(nums, val) {
//     let slow = 0, fast = 0
//     for(const i in nums){
//         if(nums[fast] !== val){
//             nums[slow] = nums[fast]
//             slow++
//         }
//         fast++
//     }
//     return slow
// };

