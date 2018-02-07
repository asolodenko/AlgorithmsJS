/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/description/
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Fixed
 */
var twoSum = function(numbers, target){
    const numbersLength = numbers.length;
    let  isPositiveTarget = target > 0;
 
    for(let i = 0; i < numbersLength; i++){
        if(isPositiveTarget && numbers[i] > target){ 
            continue;
        }
        for(let j = i + 1; j < numbersLength; j++){
            if(numbers[i] + numbers[j] === target){
                return [i,j];
            }
        }
    }
};
