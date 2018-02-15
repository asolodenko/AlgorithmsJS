/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 * 
 * https://leetcode.com/problems/next-greater-element-i/description/
 * You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. 
 * Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
 * The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.
 * If it does not exist, output -1 for this number.
 * 
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
 * Output: [-1,3,-1]
 * 
 * Note:
 * All elements in nums1 and nums2 are unique.
 * The length of both nums1 and nums2 would not exceed 1000.
 */
var nextGreaterElement = function(findNums, nums) {
    const lengthFindNums = findNums.length;
    const lengthNums = nums.length;
    let outputStack = [];
    
    for (let i = 0; i < lengthFindNums; i++) {
        let currentFindNums = findNums[i];
        let j = nums.indexOf(currentFindNums);
        if (j === lengthNums - 1) {
            outputStack.push(-1);
            continue;
        }
        for (j = j + 1; j < lengthNums; j++) {
            let currentNums = nums[j];
            if (currentNums > currentFindNums) {
                outputStack.push(currentNums);
                break;
            } else if (lengthNums - j === 1) {
                outputStack.push(-1);
            } 
        }
    } 
    return outputStack;
};