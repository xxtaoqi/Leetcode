/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var lf = 1, rt = numbers.length ;

    // for (  ; lf < rt ; lf++ ){
    //     for( ;  numbers[rt-1] + numbers[lf-1] >= target && lf < rt ; rt-- ){
    //         if(numbers[rt-1] == target - numbers[lf-1] ){
    //             return [lf,rt]
    //         }

    //     }
        
    // }
    while (lf < rt) {
        let sum = numbers[rt - 1] + numbers[lf - 1]
        if (sum == target) {
            return [lf, rt]
        } else if (sum > target) {
            rt--;
        } else if (sum < target) {
            lf++;
        }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end