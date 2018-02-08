/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/maximum-subarray/description/
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 * 
 * Fixed to Kadane`s algorithm
 */
var maxSubArray = function(nums) {
    let maxEndHere = 0;
    let maxSumSoFar = nums[0];
    const numsLength = nums.length;

    for (let i = 0; i < numsLength; i++){
        maxEndHere = Math.max(nums[i], maxEndHere + nums[i]);
        maxSumSoFar = Math.max(maxSumSoFar, maxEndHere);
    }
    return maxSumSoFar;
};