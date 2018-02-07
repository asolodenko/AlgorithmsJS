/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/search-insert-position/description/
 * Given a sorted array and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 * 
 * Fixed
 */
var insertPosition = function(nums,target){
    if(target > nums[nums.length - 1]){ 
        return nums.length; 
    }
    else if(target < nums[0]){
        return 0;
    }

    let first = 0;
    let last = nums.length - 1;
    let middleIndex = Math.floor((last - first) / 2) + first; //search middle index of array for searching value in left or right part of array
        
    while (first < last){
        let value = nums[middleIndex];
        
        if (value === target){
            return middleIndex;  //index is found  
        }
        else if (target < value){
            last = middleIndex;
        }
        else{
            first = middleIndex + 1;
        }
        middleIndex = Math.floor((last - first) / 2) + first;  //assign new middle index and go deeper
    }
};