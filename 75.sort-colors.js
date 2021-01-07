/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    /* 1、使用map */
    // var map = new Map()
    
    // if (nums.length === 1) return nums
    // nums.forEach(function (item, index, array) {
    //     //console.log(item, index);
    //     var num = map.get(item) || 0;
    //     map.set(item, num + 1);
    // })
    
    // var s = map.get(0) || 0,
    //     ss = s + (map.get(1) || 0),
    //     sss = ss + (map.get(2) || 0);
    // if (map.get(0)) {
    //     nums.fill(0, 0, s);
    // }
    // if (map.get(1)) {
    //     nums.fill(1, s, ss);
    // }
    // if (map.get(2)) {
    //     nums.fill(2, ss, sss)
    // }
    // return nums

    /*2、 one指针，遇到0 往前移，遇到2 往后移 */
    var zero = -1, one = 0, two = nums.length;
    while (one < two) {
        if (nums[one] == 0) {
            zero++;
            [nums[zero],nums[one]]=[nums[one],nums[zero]]
            one++;
        } else if (nums[one] == 2) {
            two--;
            [nums[two],nums[one]]=[nums[one],nums[two]]
        } else {
            ++one;
        }
    }
    return nums

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortColors;
// @after-stub-for-debug-end