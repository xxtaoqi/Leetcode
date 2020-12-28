/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var i = m - 1, j = n - 1, q = m + n - 1;
    while (j >= 0) {
        if (i < 0) { //剩下的nums2 装入 nums1
            nums1[q] = nums2[j];
            j--;
            // nums1.splice(0,j+1,...nums2.slice(0,j+1));
            // return nums1
        } else {
            if (nums1[i] >= nums2[j]) {
                nums1[q] = nums1[i];
                i--;
            } else if (nums1[i] < nums2[j]) {
                nums1[q] = nums2[j];
                j--;
            }
        }
        q--;
    }
    return nums1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end