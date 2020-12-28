/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let la = 0, rb = ~~Math.sqrt(c);

    // for( var la= 0 ; la<=rb; la++){
    //     for (; la * la + rb * rb >= c && la <= rb; rb--) {
    //         if (la * la + rb * rb == c) return true
    //     }
    // }

    while (la <= rb) {
        let sum = la * la + rb * rb;
        if (sum == c) {
            return true
        } else if (sum > c) {
            rb--;
        } else if (sum < c) {
            la++
        }
    }
    return false
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = judgeSquareSum;
// @after-stub-for-debug-end