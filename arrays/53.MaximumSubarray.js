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
    // let subarray;
    // let largestSum = nums[0];
    // let sum = nums[0];
    // let startSubarrayIndex = 0;
    // let endSubarrayIndex = nums.length-1;
    // for(let i = 1; i < nums.length; i++)
    // {
    //     if(sum < 0){ 
    //         sum = 0;
    //         startSubarrayIndex = i; 
    //         endSubarrayIndex = i;  //subarray may containing at least one number
    //     }
    //     sum += nums[i];
    //     endSubarrayIndex++; //saving index of possible end of array
    //     if(sum > largestSum){
    //         largestSum = sum; //save the largest sum
    //     }
    // }
    // subarray = nums.slice(startSubarrayIndex, endSubarrayIndex); //save subarray with the largest sum
    // return largestSum; // answer is required as the largest sum, but the task needs to find a subarray. what answer is right?
    let maxEndHere = 0;
    let maxSumSoFar = 0;

    for(let i = 0; i < nums.length; i++){
        maxEndHere = maxEndHere + nums[i];
        if(maxSumSoFar < maxEndHere){
            maxSumSoFar = maxEndHere;
        }
        if(maxEndHere < 0){
            maxEndHere = 0;
        }
    }
    return maxSumSoFar;
};