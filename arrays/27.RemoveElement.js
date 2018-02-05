/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * https://leetcode.com/problems/remove-element/description/
 * Given an array and a value, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

var removeElement = function(nums, val) {

    let indexOfVal = nums.indexOf(val);
    
    while(indexOfVal!==-1)
    {
       if(indexOfVal === 0){
           nums.shift();
       }else{
           nums.splice(indexOfVal,1);
       }
        indexOfVal = nums.indexOf(val);
    }
    return nums.length;
};