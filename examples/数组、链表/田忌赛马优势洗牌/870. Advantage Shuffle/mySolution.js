/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var advantageCount = function(nums1, nums2) {
    // num1升序排序
    nums1.sort((a,b) => a-b) 
    let n = nums1.length
    let nums= new Array(n)
    let sortedNums2=[]
    nums2.forEach((item,index) => {
        sortedNums2.push([index,item]) // sortedNums2数组相比nums2数组，多包括原nums2中的索引
    })
    let left=0, right=n-1
    // num2降序排序
    sortedNums2.sort((a,b)=> b[1] - a[1]).forEach(item => { // 该回调函数需带返回值：=> b[1] - a[1] 或 => {return b[1] - a[1]}
        if(nums1[right]>item[1]){
            nums[item[0]] = nums1[right]
            right--
        }else{
            nums[item[0]] = nums1[left]
            left++
        }
    })
    return nums
};