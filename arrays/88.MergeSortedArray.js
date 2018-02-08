/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * https://leetcode.com/problems/merge-sorted-array/description/
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * Note:
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional
 * elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
 */
var merge = function(nums1, m, nums2, n) {
    let lastIndexOfFirst = m - 1;
    let lastIndexOfSecond = n - 1;
    let lastAccessIndex = m + n - 1;

    while (lastIndexOfFirst >= 0 && lastIndexOfSecond >= 0) {
        if (nums1[lastIndexOfFirst] > nums2[lastIndexOfSecond]) {
            nums1[lastAccessIndex--] = nums1[lastIndexOfFirst--];
        } else {
            nums1[lastAccessIndex--] = nums2[lastIndexOfSecond--];
        }
    }

    while (lastIndexOfSecond >= 0) {
        nums1[lastAccessIndex--] = nums2[lastIndexOfSecond--];
    }
};